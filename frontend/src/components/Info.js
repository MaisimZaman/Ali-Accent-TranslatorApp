import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      result: "",
      regularInput: "",

    };
    this.handleTranslationChange = this.handleTranslationChange.bind(this);

  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Enter Something to translate into ali accent
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <TextField
            error={this.state.error}
            label="Translate to ali accent"
            size="large"
            placeholder="Enter a ali accent eord here"
            value={this.state.regularInput}
            helperText={this.state.error}
            variant="outlined"
            fullWidth
            onChange={this.handleTranslationChange}
          />
          <Typography variant="h4" component="h4">
              Translation: {this.state.result}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="contained" color="secondary" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }

  handleTranslationChange(e){

    var phrase = e.target.value;


  

    function translatetoAliAccent(phrase){

      let words =  ["talk", "work", "make", "gonna", "shit", "mans", "making", "lmao", "ight", "lol", "ima", "retard", "joke", "mark", "beat", "ass", "world", "bare", "english",
      "words", "maisim", "harvin", "josh", "relatively", "error", "errors", "comprehend", "stopped", "makes", "intelligent", "intellect", "quantum", "physics", "einstein",
      "couldnt", "wouldnt", "dip", "working", "talking", "had", "look", "looking", "smoke", "bucks", "sister", "now", "study",
      "take", "fake", "stupid", "dumb", "taking", "with", "there", "man", "lied", "tryna", "date", "break", "smoked", "aunt",
      "going", "they", "gained", "okay", "knowledge", "shouldnt", "know", "anything", "nah", "their", "worry", "much", "once",
      "would", "can", "code", "my", "about", "wrong", "politley"
      ]

      var trans = {"talk": "tawlk", "work": "worck", "make": "mack", "and": "amd", "gonna": "lobbra", "shit": "ahit",       "mans": ",ans",
      "making": "macking", "lmao": "pmao", "ight": "8ght", "lol": "l9l", "ima": "8ma", "retard": "restard", "joke": "jock", "mark": "marck", "beat": "beets", "ass": "ads",
      "world": "eorld", "bear": "bare", "english": "ebglish", "words": "eords", "maisim": "mamsim", "harvin": "garvin", "josh": "j9sh", "relatively": "relitivity",
      "error": "eror", "errors": "erors", "comprehend": "compreheand", "stopped": "stipped", "makes": "macks", "intelligent": "intyligent","intellect": "intellecc",
      "quantum": "kwuantum", "physics": "phisicks", "einstein": "enstine", "couldnt": "chpuldent", "wouldnt": "whouldent", "dip": "cut", "working": "worcking",
      "talking": "tawlking", "had": "ahd", "look": "loom", "looking": "loccking", "smoke": "smock", "bucks": "bicks", "sister": "sagter",
      "now": "Nlw", "study": "studg", "take": "tack", "fake": "fack", "stupid": "stpid", "dumb": "dum", "taking": "tacking",
      "with": "woth", "there": "therie", "man": "mams", "lied": "loved", "tryna": "tyna", "date": "datr", "break": "brack",
      "smoked": "smocked", "aunt": "ant", "going": "gping", "they": "yhey", "gained": "gaimed", "okay": "olklay","knowledge":"kno EDGE",
      "shouldnt": "shoudent", "know": "k ow", "anything": "anythig", "nah": "ngahhh", "their": "theur", "worry": "woery", "much": "mich",
      "once": "ounce", "would": "whould", "can": "cam", "code": "c9de", "my": "me", "about": "abouy", "wrong": "wromg", "politley": "polity",

    }



      for (var i = 0; i<words.length; i++){
        phrase = phrase.replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]]).replace(words[i], trans[words[i]])
      }
      
      return phrase 

    }

    var final = translatetoAliAccent(phrase)



    this.setState({
      result: final,
      regularInput: e.target.value,

    });

  }

  

 
}
