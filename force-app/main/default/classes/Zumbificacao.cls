public class Zumbificacao {

    @invocableMethod(label='Transforma Zumbi')
    
    public static void zumbificar(List<id> ids) {
        
        List<Criatura__c> criaturas = [SELECT Id, Bunker__r.name, (SELECT Id FROM RecursosCriatura__r) FROM Criatura__c WHERE Id in : ids];
        List<RecursoCriatura__c> rcDeleteList = new List<RecursoCriatura__c>();
        System.debug(ids);
        
        for (Criatura__c cr : criaturas) {
            
            String tipoZumbi = '';
            Integer random = Math.mod(Integer.valueOf(Math.random()*100000), 100);
            
            if (random < 50) {
                tipoZumbi = 'Lerdo';
            } else if (random < 80) {
                tipoZumbi = 'Rápido';
            } else {
                tipoZumbi = 'Gordo';
            }
            
            // Trocando TipoZumbi
            cr.TipoZumbi__c = tipoZumbi;
            
            // Adicionando Recursos numa lista para deletar
            if (cr.RecursosCriatura__r != null)
                rcDeleteList.addAll(cr.RecursosCriatura__r);
            
        }
        
        update criaturas;
        delete rcDeleteList;
        
    }
    
}