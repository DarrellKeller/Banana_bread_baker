/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

var SELECTED = 0;
let CURR_STATE = true;

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    SELECTED = 0;
    const speechText = 'Welcome to banana bread baker. A step by step baking process. We are going to make a great loaf, I can just feel it. You navigate this app with your voice, at any time you can say Alexa next to continue or Alexa go back, to go back';

    if (supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "homepage",
            document: require('./homepage.json'),
            datasources: {}
        })
        .getResponse();
    } else {
      return handlerInput.responseBuilder
        .speak("Sorry, this app is built for multimodal experience only. Try this app again on an amazon device with a screen")
        .reprompt(speechText)
        .withSimpleCard('Try this on an amazon device with a screen', speechText)
        .getResponse();
    }
  },
};









const NextIntentHandler = {
  canHandle(handlerInput) {
    console.log("ARUGMENTS" + JSON.stringify(handlerInput.requestEnvelope));
    
    return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NextIntent')
      || (handlerInput.requestEnvelope.request.type === 'Alexa.Presentation.APL.UserEvent'
        && handlerInput.requestEnvelope.request.arguments.length > 0
        && handlerInput.requestEnvelope.request.arguments[0] === 'videoEnded');
 },
  handle(handlerInput) {
      ++SELECTED;
      
      if (SELECTED == 0){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./homepage.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 1){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./miseen.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 2){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step1.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 3){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step2.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 4){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step3.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 5){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step4.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 6){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step5.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 7){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step6.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 8){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step7.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 9){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step8.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 10){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step9.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 11){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step10.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 12){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step11.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 13){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step12.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 14){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step13.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 15){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step14.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 16){
      return handlerInput.responseBuilder
        .speak('Thanks for baking with us!')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step15.json'),
            datasources: {}
        })
        .getResponse();
      }
      else {
      --SELECTED;
      return handlerInput.responseBuilder
        .speak('You have reached the end of this app')
        .getResponse();
    }

  },
};









const PreviousIntentHandler = {
  canHandle(handlerInput) {
    console.log("ARUGMENTS" + JSON.stringify(handlerInput.requestEnvelope));
    
    return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.PreviousIntent');

 },
  handle(handlerInput) {
      --SELECTED;
      
      
     if (SELECTED == 0){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./homepage.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 1){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./miseen.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 2){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step1.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 3){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step2.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 4){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step3.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 5){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step4.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 6){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step5.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 7){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step6.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 8){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step7.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 9){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step8.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 10){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step9.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 11){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step10.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 12){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step11.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 13){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./step12.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 14){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step13.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 15){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step14.json'),
            datasources: {}
        })
        .getResponse();
      }
      if (SELECTED == 16){
      return handlerInput.responseBuilder
        .speak('Thanks for baking with us!')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: "VideoPlayerToken",
            document: require('./step15.json'),
            datasources: {}
        })
        .getResponse();
      }
      else {
      ++SELECTED;
      return handlerInput.responseBuilder
        .speak('You have reached the front of this app')
        .getResponse();
    }

  },
};





const HomeIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NavigateHomeIntent';
  },
  handle(handlerInput) {
      SELECTED = 1;
      
      if (SELECTED == 1){
      return handlerInput.responseBuilder
        .speak('')
        .addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: require('./miseen.json'),
            datasources: {}
        })
        .getResponse();
      }
  },
};







const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say next, go back, or home to navigate this app';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};


const ResumeAndPauseIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.ResumeIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.PauseIntent');
  },
  handle(handlerInput) {

    CURR_STATE = !CURR_STATE;

    let playPause = CURR_STATE ? "play" : "pause";

      return handlerInput.responseBuilder
        .addDirective({
              type: "Alexa.Presentation.APL.ExecuteCommands",
              token: "VideoPlayerToken",
              commands: [
                {
                  type: "ControlMedia",
                  componentId: "myVideoPlayer",
                  command: playPause
                }
              ]
          })
        .getResponse();
    
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak('Thanks for baking with us!')
      .withSimpleCard('Thanks for cooking with us', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log("WHOLE ERROR" + JSON.stringify(error));
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

function supportsAPL(handlerInput) {
    const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
    const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
    return aplInterface != null && aplInterface != undefined;
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    ResumeAndPauseIntentHandler,
    SessionEndedRequestHandler,
    NextIntentHandler,
    PreviousIntentHandler,
    HomeIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();

  const MIXED_DRINKS = [];
