global class ContagionSchedulable implements Schedulable {
    
    global void execute(SchedulableContext SC) {
        this.contagiar(); 
    }
    
    private void contagiar(){
        
        List<Criatura__c> humanList = [SELECT id FROM Criatura__c where recordtypeId = '0125e000001EEGPAA4'];
        List<Criatura__c> zombieList = [SELECT id FROM Criatura__c where recordtypeId = '0125e000001EEGUAA4'];
        
        for(Criatura__c zb : zombieList){
            
            if(humanList.size() ==0) break;
            
            Criatura__c hmn1 = humanList.get(Math.mod(Integer.valueOf(Math.random()*1000), humanList.size()));
            hmn1.recordtypeId = '0125e000001EEGUAA4';
            hmn1.DataZumbificacao__c = Date.today();
            
            Criatura__c hmn2 = humanList.get(Math.mod(Integer.valueOf(Math.random()*1000), humanList.size()));
            hmn2.recordtypeId = '0125e000001EEGUAA4';
            hmn2.DataZumbificacao__c = Date.today();
            
        }
        
        update humanList;
        
    }
    
}