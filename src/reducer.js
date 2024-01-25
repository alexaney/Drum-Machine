import closedHH from './Closed_HH.mp3';
import chord1 from './Chord_1.mp3';
import chord2 from './Chord_2.mp3';
import chord3 from './Chord_3.mp3';
import clap from './Clap.mp3';
import closedHHDrum from './Closed_HH_2.mp3';
import heater1 from './Heater-1.mp3';
import heater2 from './Heater-2.mp3';
import heater3 from './Heater-3.mp3';
import heater4 from './Heater-4_1.mp3';
import kickNHat from './Kick_n_Hat.mp3';
import kick from './Kick.mp3';
import openHH from './Open_HH_2.mp3';
import openHHDrum from './Open_HH_2.mp3'
import punchyKick from './punchy_kick_1.mp3';
import shaker from './Shaker.mp3'
import sideStick from './side_stick_1.mp3';
import snare from './Snare.mp3';

const reducer = (state = {power: false, instrument: "DRUM", clicked: false, volume: 50}, action) => {
    switch (action.type) {
        case ("CHANGESOUND"):
            switch (action.instrument) {
                case("PIANO"):
                    switch (action.key) {
                        case ("Q"):
                            return {
                                ...state,
                                display: "Chord 1",
                                audio: chord1,
                                clicked: !state.clicked
                            }
                        case ("W"):
                            return {
                                ...state,
                                display: "Chord 2",
                                audio: chord2,
                                clicked: !state.clicked
                            }
                        case ("E"):
                            return {
                                ...state,
                                display: "Chord 3",
                                audio: chord3,
                                clicked: !state.clicked
                            }
                        case ("A"):
                            return {
                                ...state,
                                display: "Shaker",
                                audio: shaker,
                                clicked: !state.clicked
                            }
                        case ("S"):
                            return {
                                ...state,
                                display: "Open HH",
                                audio: openHH,
                                clicked: !state.clicked
                            }
                        case ("D"):
                            return {
                                ...state,
                                display: "Closed HH",
                                audio: closedHH,
                                clicked: !state.clicked                            
                            }
                        case ("Z"):
                            return {
                                ...state,
                                display: "Punchy Kick",
                                audio: punchyKick,
                                clicked: !state.clicked                            
                            }
                        case ("X"):
                            return {
                                ...state,
                                display: "Side Stick",
                                audio: sideStick,
                                clicked: !state.clicked                            
                            }
                        case ("C"):
                            return {
                                ...state,
                                display: "Snare",
                                audio: snare,
                                clicked: !state.clicked                            
                            }
                        default:
                            return state;
                    }
                case ("DRUM"):
                    switch (action.key) {
                        case ("Q"):
                            return {
                                ...state,
                                display: "Heater 1",
                                audio: heater1,
                                clicked: !state.clicked                            
                            }
                        case ("W"):
                            return {
                                ...state,
                                display: "Heater 2",
                                audio: heater2,
                                clicked: !state.clicked                            
                            }
                        case ("E"):
                            return {
                                ...state,
                                display: "Heater 3",
                                audio: heater3,
                                clicked: !state.clicked
                            }
                        case ("A"):
                            return {
                                ...state,
                                display: "Heater 4",
                                audio: heater4,
                                clicked: !state.clicked                            
                            }
                        case ("S"):
                            return {
                                ...state,
                                display: "Clap",
                                audio: clap,
                                clicked: !state.clicked                            
                            }
                        case ("D"):
                            return {
                                ...state,
                                display: "Open HH",
                                audio: openHHDrum,
                                clicked: !state.clicked                            
                            }
                        case ("Z"):
                            return {
                                ...state,
                                display: "Kick n' Hat",
                                audio: kickNHat,
                                clicked: !state.clicked                            
                            }
                        case ("X"):
                            return {
                                ...state,
                                display: "Kick",
                                audio: kick,
                                clicked: !state.clicked                            
                            }
                        case ("C"):
                            return {
                                ...state,
                                display: "Closed HH",
                                audio: closedHHDrum,
                                clicked: !state.clicked                            
                            }
                        default:
                            return state;
                    }
            }
        case ("CHANGEPOWER"):
            return {
                ...state,
                display: '',
                power: action.payload
            }
        case ("CHANGEINSTRUMENT"):
            return {
                ...state,
                display: action.payload,
                instrument: action.instrument
            }
        case ("CHANGEVOLUME") :
            return {
                ...state, 
                display: "Volume: " + action.payload,
                volume: action.payload
            }
        default: 
            return state;
    }
}
export default reducer;