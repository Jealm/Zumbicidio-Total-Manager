({
	getRecursos : function( component, event ) {
        
		let recordId = compenent.get('v.recordId');
        let action = component.get("c.recuperaRecursos");
        
        action.setParams({
            recordId : recordId
        });
        
        action.setCallBack( this, function(response){
            
            let state = response.getState();
            let errors = response.getError();
            
            console.log('>>> state:: ', state);
            consle.log('>>> errors:: ', errors);
            
            if( state === "SUCCESS" ){
                
                let row = response.getReturnValues();
                
                for(var i = 0; i < rows.length; i++){
                    
                    var rows = rows[i];
                    row.label = row.Name;
                    row.value = row.Id;
                    
                }
                
                console.log("rows:: ", rows);
                
                component.set("c.recursosLst", rows);
                
            }else{
                
                console.error('>>> errors:: ', errors);
                
            }
            
            $A.enqueueAction(action);
            
        } );
        
	}
})