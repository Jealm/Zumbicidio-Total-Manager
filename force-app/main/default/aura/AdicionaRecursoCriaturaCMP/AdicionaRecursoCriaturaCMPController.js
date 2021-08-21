({
	
    doInit : function( componet, event, helper ){
        //let recordId = component.get("v.recordId");
        //alert(recordId);
        helper.getRecursos( component, event );
    },
    
    handleChange : function ( cmp, event ){
        var selectedOptionValue = event.getParam("Value");
        alert("Option selected with value: '"+ selectedoptionValue +"'");
    }
    
})