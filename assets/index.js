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
    
    
	var SatRecords = ko.observableArray([
					{test_month:"May",test_year:"2016",reading:"400",writing:400,maths:400,test_score:1200}					
	]);
	
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
        canDelSatRec:canDelSatRec,
        months:months,
        years:years
	};

}();