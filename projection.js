/** The next block of code creates the div element that will appear when the target is found.
*   Styles for both divs can be found in style.css
*   Both divs belong to class "contentContainer"
*   Paragraphs belong to class "ARParagraphs"
*
    projectionDiv: div to hold artInfo, creatorInfo, and circleContainer
*
*       artInfo: div with information about the art
*           @artHeader: header for the artInfo div
*           @artHeaderText: text for header
*           @artPara: paragraph for artInfo div
*           @artParaText: text for paragraph
*       creatorInfo: div with information about the creator
*           @creatorHeader: header for the artInfo div
*           @creatorHeaderText: text for header
*           @creatorPara: paragraph for artInfo div
*           @creatorParaText: text for paragraph
*
*       circleContainer: div with circles for screen state
*           @circle1: indicator for left side
*           @circle2: indicator for right side
*   
*/

var projectionDiv = document.createElement('div');
projecionDiv.className = "infoDiv";

var changingDiv = document.createElement("div");
changingDiv.className = "swipeDiv";

//**************** circle container ****************
//Circles at the bottom of the div to indicate screen state
var circleContainer = document.createElement("div");
var circle1 = document.createElement("div");
var circle2 = document.createElement("div");

circleContainer.className = "circleContainer";
circle1.className = "circles";
circle2.className = "circles";

circleContainer.appendChild(circle1);
circleContainer.appendChild(circle2);

circle1.style.backgroundColor = "white";

//**************** artInfo ****************
//artInfo div, header, and paragraph declarations
var artInfo = document.createElement('div');
artInfo.className = "contentContainer";

//header
var artHeader = document.createElement("h3");
var artHeaderText = document.createTextNode("Title, 1900");
artHeader.appendChild(artHeaderText);

//paragraph
var artPara = document.createElement("p");
artPara.className = "ARParagraphs";
var artParaText = document.createTextNode("Description about art piece goes here. Short paragraph describing piece history/inspiration/etc.");
artPara.appendChild(artParaText);

artInfo.appendChild(artHeader);
artInfo.appendChild(artPara);

//**************** creatorInfo ****************
//creatorInfo div, header, and paragraph declarations

var creatorInfo = document.createElement('div');
creatorInfo.className = "contentContainer";

//header
var creatorHeader = document.createElement("h3");
var creatorHeaderText = document.createTextNode("First Last");
creatorHeader.appendChild(creatorHeaderText);

//paragraph
var creatorPara = document.createElement("p");
creatorPara.className = "ARParagraphs";
var creatorParaText = document.createTextNode("Bio about artist. Short paragraph describing artist history/inspiration/etc.");
    creatorPara.appendChild(creatorHeaderText);

creatorInfo.appendChild(creatorHeader);
creatorInfo.appendChild(creatorPara);

//*********************************************

changingDiv.appendChild(artInfo);
changingDiv.appendChild(creatorInfo);

projectionDiv.appendChild(changingDiv);
projectionDiv.appendChild(circleContainer);

//Create 
var cssObjectArt = new THREE.CSS3DSprite(projectionDiv);

//this is a property of projectionDiv
var visibleScreen = "left";

cssObjectArt.scale.set(.8, .8, .8);

projectionDiv.addEventListener('touchstart', handleTouchStart, false);
projectionDiv.addEventListener('touchmove', handleTouchMove, false);

var startX;



function handleTouchStart(event) {
    startX = event.clientX;
    console.log(startX) 
    //makeTransition(event.type);
}

function handleTouchMove(event) {
    console.log(event.clientX);
}

/*  This block of code contains the code for the Finite State Machine. This FSM controls AR Projections 


var startState;
var currentState = ARProjectionFSM[startState];

var ARProjectionFSM = {
    
    'visible': {
        'touchstart':{
            
            actions: [{func: function(){
                console.log("Div has been pressed");
            }}],
            
            endState: 'touched'
        }, 
    },
            
    'touched': {
        'touchmove': {
            
            'swipedRight': {
            
                predicate: {
                    //is finger moving to the right?
                },
            
                actions: [{func: rightSwipe}],
            
                endState: 'visible'
        
            },
            
            'swipedLeft': {
                
                predicate: {
                //is finger moving to the left?
                },
            
                actions: [{func: leftSwipe}],
            
                endState: 'visible'
            
            }
        }  
    
    }
             
};


/*

make changing div 200% the container div, put both inside.
change its position as finger moves



var rightSwipe = function(){
    
    if (visibleScreen == "right") {
        //this means right content is visible
        
        //move right content and replace with left content
        changingDiv.removeChild(artInfo);
        changingDiv.appendChild(creatorInfo);
        
        visibleScreen = "left";
        //right circle switch with left circle
        
        circle1.style.backgroundColor = "darkgray";
        circle2.style.backgroundColor = "white";
    } else {
        //bounce content to the right
    }
}

var leftSwipe = function(){
    
    if (visibleScreen == "left") {
        //this means left content is visible
        
        //move left content and replace with right content
        changingDiv.removeChild(creatorInfo);
        changingDiv.appendChild(artInfo);
        
        visibleScreen = "right";
        //left circle switch with right circle        
        
        circle2.style.backgroundColor = "darkgray";
        circle1.style.backgroundColor = "white";

        
    } else {
        //bounce content to the left
    }
}
*/
