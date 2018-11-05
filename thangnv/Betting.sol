pragma solidity ^0.4.25;

pragma experimental ABIEncoderV2;
contract Betting{
    
    address owner;
    uint numberOwner=3;
    
    constructor(){
        owner = msg.sender;
    }
    
    function changeNumberOwner(uint _numbeOwner) checkOwner(){
        numberOwner=_numbeOwner;
    }
    
    struct Owner{
        address id;
        uint number;
        uint money;
    }
    
    Owner[] Owners;
    Owner[] EmtyOwners;
    mapping(address => Owner) ToOwner;
    
    struct History{
        uint time;
        address id;
        uint number;
        uint addmoney;
    }
    
    History[] Historys;
    mapping(address => History) ToHistory;
    
    function register(uint _number) public payable checkAcc() checkValue(_number) {
        
        uint total=0;
        for(uint i=0; i<Owners.length;i++){
            if(Owners[i].number == _number){
                total += (Owners[i].money*2);
            }
        }
        require(this.balance>=(total+(msg.value*2)),"Nếu bạn đc chọn Contract không đủ tiền trả .");
        
        Owner memory owner = Owner(msg.sender, _number, msg.value);
        Owners.push(owner);
        ToOwner[msg.sender]=owner;
        emit registered(msg.sender, _number, msg.value/ 1 ether);
        if(Owners.length==numberOwner){
            run();
        }
    }
    
    function getMoneyContract() view returns(uint){
        return(this.balance);
    }
    
    function getInfoBetting() view returns(uint,Owner[]){
        return(numberOwner,Owners);
    }
    
    function getHistory() view returns(History[]){
        return(Historys);
    }
    
    function run() internal{   
        uint number = (uint(keccak256(now)) % numberOwner)+1;
        for(uint i=0; i<Owners.length;i++){
            if(Owners[i].number==number){
                
                Owners[i].id.transfer(2* Owners[i].money);

                History memory history= History(now,Owners[i].id,Owners[i].number,2* Owners[i].money);
                Historys.push(history);
                
            }
        }
        Owners=EmtyOwners;
    }
    
    function sendMoneyToContract() public payable{
        
    }
    
    function kill() checkOwner() {
        selfdestruct(owner);
    }
    
    function checkrRegister(address _sender) internal returns(bool) {
        for(uint i=0;i<Owners.length;i++){
                if(Owners[i].id==_sender){
                    return false;
                }
            }
            return true;
    }
    
    modifier checkAcc(){
        require(checkrRegister(msg.sender),"Bạn đã đăng kí");
        _;
    }
    
    modifier checkOwner(){
        require(msg.sender==owner,"Bạn không có quyền");
        _;
    }
    
    modifier checkValue(uint _number) {
        require(msg.value>=1 ether,"Bạn phải đặt >=1 ether");
        _;
    }
    
    event registered(address _owner, uint _number, uint _ether);
}