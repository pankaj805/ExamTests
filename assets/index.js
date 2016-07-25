var AllTestRecords = function () {
	
    
    var months ={
       all:ko.observableArray([
        "January" ,
        "February" ,
        "March" ,
        "April" ,
        "May" ,
        "June" ,
        "July" ,
        "August" ,
        "September" ,
        "October" ,
        "November" ,
        "December" 
        
        ]) 
    } ;
    
    var years ={
       all:ko.observableArray([
        "2011" ,
        "2012" ,
        "2013" ,
        "2014" ,
        "2015" ,
        "2016" ,
        "2017" ,
        "2018" ,
        "2019" ,
        "2020" ,
        "2021" ,
        "2022"         
        ]) 
    } ;
    
     
    

    var satSingleRec = {
	    test_month: ko.observable(),        
	    test_year: ko.observable(),
        reading: ko.observable(),        
	    writing: ko.observable(),
        maths: ko.observable()
    };

    satSingleRec.test_score = ko.pureComputed(function () {
        
        var calcValue=0;        
        if(this.reading() != null && this.reading() !=""){
            calcValue += parseInt(this.reading())
        }
        if(this.writing() != null && this.writing() !=""){
            calcValue += parseInt(this.writing())
        }
        if(this.maths() != null && this.maths() !=""){
            calcValue += parseInt(this.maths())
        }
        if(calcValue == 0 && this.reading() == null && this.writing() == null && this.maths() == null  ){
            return "####";
        }
        return calcValue;

    }, satSingleRec);
    
    satSingleRec.canAddRec = ko.pureComputed(function () {
       return  this.reading() && this.writing() && this.maths() && this.test_month() && this.test_year ;
    }, satSingleRec);    
    
    
	var SatRecords = ko.observableArray([]);
	
    var canDelSatRec = ko.pureComputed(function() {
        if (SatRecords().length > 1) {
            return true;
        } else {
            return false;
        }
    });

	var clearSatSingleRec = function () {
	    satSingleRec.test_month(null);
	    satSingleRec.test_year(null);
	    satSingleRec.reading(null);
        satSingleRec.writing(null);
        satSingleRec.maths(null);
        satSingleRec.test_score(null);
	};
	
	
	var addSatSingleRec = function () {		
	    SatRecords.push({ test_month: satSingleRec.test_month(), test_year: satSingleRec.test_year(), reading: satSingleRec.reading(),writing:satSingleRec.writing(),maths:satSingleRec.maths(),test_score:satSingleRec.test_score()});
		clearSatSingleRec();
	};
    
    var removeSatSingleRec = function(){
        SatRecords.pop();    
    };
    
    var removeSatSingleRecAtIndex = function(data,event){
        var context = ko.contextFor(event.target);
        var i = context.$index();
        SatRecords.splice(i, 1);    
    };
	
    
    
    /*    
    
        Sat 2
        
    */
    
    var sat2SingleRec = {
	    test_month: ko.observable(),        
	    test_year: ko.observable(),
        reading: ko.observable(),        
	    writing: ko.observable(),
        maths: ko.observable()
    };

    sat2SingleRec.test_score = ko.pureComputed(function () {
        
        var calcValue=0;        
        if(this.reading() != null && this.reading() !=""){
            calcValue += parseInt(this.reading())
        }
        if(this.writing() != null && this.writing() !=""){
            calcValue += parseInt(this.writing())
        }
        if(this.maths() != null && this.maths() !=""){
            calcValue += parseInt(this.maths())
        }
        if(calcValue == 0 && this.reading() == null && this.writing() == null && this.maths() == null  ){
            return "####";
        }
        return calcValue;

    }, sat2SingleRec);
    
    sat2SingleRec.canAddRec = ko.pureComputed(function () {
       return  this.reading() && this.writing() && this.maths() && this.test_month() && this.test_year ;
    }, sat2SingleRec);    
    
    
	var Sat2Records = ko.observableArray([]);
	
    var canDelSat2Rec = ko.pureComputed(function() {
        if (Sat2Records().length > 1) {
            return true;
        } else {
            return false;
        }
    });

	var clearSat2SingleRec = function () {
	    sat2SingleRec.test_month(null);
	    sat2SingleRec.test_year(null);
	    sat2SingleRec.reading(null);
        sat2SingleRec.writing(null);
        sat2SingleRec.maths(null);
        sat2SingleRec.test_score(null);
	};
	
	
	var addSat2SingleRec = function () {		
	    Sat2Records.push({ test_month: sat2SingleRec.test_month(), test_year: sat2SingleRec.test_year(), reading: sat2SingleRec.reading(),writing:sat2SingleRec.writing(),maths:sat2SingleRec.maths(),test_score:sat2SingleRec.test_score()});
		clearSat2SingleRec();
	};
    
    var removeSat2SingleRec = function(){
        Sat2Records.pop();    
    };
    
    
    
    
    /*
    
    ACT
    
    */
    
        var actSingleRec = {
	    test_month: ko.observable(),        
	    test_year: ko.observable(),
        reading: ko.observable(),        
	    writing: ko.observable(),
        maths: ko.observable()
    };

    actSingleRec.test_score = ko.pureComputed(function () {
        
        var calcValue=0;        
        if(this.reading() != null && this.reading() !=""){
            calcValue += parseInt(this.reading())
        }
        if(this.writing() != null && this.writing() !=""){
            calcValue += parseInt(this.writing())
        }
        if(this.maths() != null && this.maths() !=""){
            calcValue += parseInt(this.maths())
        }
        if(calcValue == 0 && this.reading() == null && this.writing() == null && this.maths() == null  ){
            return "####";
        }
        return calcValue;

    }, actSingleRec);
    
    actSingleRec.canAddRec = ko.pureComputed(function () {
       return  this.reading() && this.writing() && this.maths() && this.test_month() && this.test_year ;
    }, actSingleRec);    
    
    
	var ActRecords = ko.observableArray([]);
	
    var canDelActRec = ko.pureComputed(function() {
        if (ActRecords().length > 1) {
            return true;
        } else {
            return false;
        }
    });

	var clearActSingleRec = function () {
	    actSingleRec.test_month(null);
	    actSingleRec.test_year(null);
	    actSingleRec.reading(null);
        actSingleRec.writing(null);
        actSingleRec.maths(null);
        actSingleRec.test_score(null);
	};
	
	
	var addActSingleRec = function () {		
	    ActRecords.push({ test_month: actSingleRec.test_month(), test_year: actSingleRec.test_year(), reading: actSingleRec.reading(),writing:actSingleRec.writing(),maths:actSingleRec.maths(),test_score:actSingleRec.test_score()});
		clearActSingleRec();
	};
    
    var removeActSingleRec = function(){
        ActRecords.pop();    
    };
    
    
    /*
        TOEFL/IEL

    
    */
    
    
        var toflSingleRec = {
	    test_month: ko.observable(),        
	    test_year: ko.observable(),
        reading: ko.observable(),        
	    writing: ko.observable(),
        maths: ko.observable()
    };

    toflSingleRec.test_score = ko.pureComputed(function () {
        
        var calcValue=0;        
        if(this.reading() != null && this.reading() !=""){
            calcValue += parseInt(this.reading())
        }
        if(this.writing() != null && this.writing() !=""){
            calcValue += parseInt(this.writing())
        }
        if(this.maths() != null && this.maths() !=""){
            calcValue += parseInt(this.maths())
        }
        if(calcValue == 0 && this.reading() == null && this.writing() == null && this.maths() == null  ){
            return "####";
        }
        return calcValue;

    }, toflSingleRec);
    
    toflSingleRec.canAddRec = ko.pureComputed(function () {
       return  this.reading() && this.writing() && this.maths() && this.test_month() && this.test_year ;
    }, toflSingleRec);    
    
    
	var ToflRecords = ko.observableArray([]);
	
    var canDelToflRec = ko.pureComputed(function() {
        if (ToflRecords().length > 1) {
            return true;
        } else {
            return false;
        }
    });

	var clearToflSingleRec = function () {
	    toflSingleRec.test_month(null);
	    toflSingleRec.test_year(null);
	    toflSingleRec.reading(null);
        toflSingleRec.writing(null);
        toflSingleRec.maths(null);
        toflSingleRec.test_score(null);
	};
	
	
	var addToflSingleRec = function () {		
	    ToflRecords.push({ test_month: toflSingleRec.test_month(), test_year: toflSingleRec.test_year(), reading: toflSingleRec.reading(),writing:toflSingleRec.writing(),maths:toflSingleRec.maths(),test_score:toflSingleRec.test_score()});
		clearToflSingleRec();
	};
    
    var removeToflSingleRec = function(){
        ToflRecords.pop();    
    };
	
	var init = function () {
		ko.applyBindings(AllTestRecords);
	};
	
	/* execute the init function when the DOM is ready */
	$(init);
	
	return {
		/* add members that will be exposed publicly */
		SatRecords: SatRecords,
		satSingleRec: satSingleRec,
		addSatSingleRec: addSatSingleRec,
        removeSatSingleRec:removeSatSingleRec,
        removeSatSingleRecAtIndex:removeSatSingleRecAtIndex,
        canDelSatRec:canDelSatRec,
        Sat2Records: Sat2Records,
		sat2SingleRec: sat2SingleRec,
		addSat2SingleRec: addSat2SingleRec,
        removeSat2SingleRec:removeSat2SingleRec,
        canDelSat2Rec:canDelSat2Rec,
        ActRecords: ActRecords,
		actSingleRec: actSingleRec,
		addActSingleRec: addActSingleRec,
        removeActSingleRec:removeActSingleRec,
        canDelActRec:canDelActRec,
        ToflRecords: ToflRecords,
		toflSingleRec: toflSingleRec,
		addToflSingleRec: addToflSingleRec,
        removeToflSingleRec:removeToflSingleRec,
        canDelToflRec:canDelToflRec,
        months:months,
        years:years
	};

}();