({
	getRecursos : function(component, event) {
		let recordId = component.get("v.recordId");
        
        let action = component.get("c.recuperaRecursos");
        
        action.setParams({
            recordId : recordId
        });
        
        action.setCallback(this, function(response){
        	let state = response.getState();
        	let errors = response.getError();
            
            if( state === "SUCCESS" ) {
                let rows = response.getReturnValue();
                
                for( var i =0; i < rows.length; i++ ){
                    var row = rows[i];
                    row.label = row.Name;
                    row.value = row.Id;
                }
                console.log('rows ::',rows);    
                
                if( rows )
                	component.set("v.recursosLst", rows);
                
            } else {
                console.log('>>> errors:: ', errors);
            }
            
            
        });
        $A.enqueueAction(action);
    },
    
    adicionaRecurso : function(component, event) {
        
		let recordId 	= component.get("v.recordId");
    	let recursoId 	= component.get("v.recursoSelecionado");
        
        let action = component.get("c.adicionarRecursoCriatura");
        
        console.log('>>> adicionaRecurso <<<' );
        
        action.setParams({
            criaturaId : recordId,
    		recursoId : recursoId
        });
        
        action.setCallback(this, function(response){
            
            let state = response.getState();
        	let errors = response.getError();
            
            console.log('>>> state ::',state);
            console.log('>>> errors ::',errors);
            if( state === "SUCCESS" ) {
                console.log('>>> Success');
            } else {
                console.log('>>> errors:: ', errors);
            }
            
            
        });
        $A.enqueueAction(action);
    }
})