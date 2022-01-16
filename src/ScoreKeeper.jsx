import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Select, MenuItem, InputLabel } from "@mui/material";
import "./ScoreKeeper.css";

function ScoreKeeper() {
  const winScores = [3, 4, 5, 6, 7, 8];
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [winScore, setWinScore] = useState(3);

  let gameOver = p1 === winScore || p2 === winScore;

  return (
    <div className="ScoreKeeper">
      <Card className="ScoreKeeper-card">
        <CardMedia
          className="ScoreKeeper-img"
          component="img"
          height="140"
          image="https://k9f7a9j9.rocketcdn.me/wp-content/uploads/2021/08/lisa-keffer-i0kB5B9J8Ds-unsplash.jpg"
          alt="ping pong"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {gameOver && <h5 className="ScoreKeeper-winner">WINNER</h5>}
            <div className="ScoreKeeper-scores">
              <span className={`ScoreKeeper-player1`}>{p1}</span>
              <span>to</span>
              <span className="ScoreKeeper-player2">{p2}</span>
            </div>
          </Typography>
          <CardActions className="ScoreKeeper-buttons">
            <Button
              className="ScoreKeeper-p1Btn"
              variant="contained"
              color="success"
              onClick={() => setP1(p1 + 1)}
              disabled={gameOver}
            >
              Player One
            </Button>
            <Button
              className="ScoreKeeper-reset"
              variant="contained"
              onClick={() => (setP1(0), setP2(0))}
            >
              Reset
            </Button>
            <Button
              className="ScoreKeeper-p2Btn"
              variant="contained"
              color="error"
              onClick={() => setP2(p2 + 1)}
              disabled={gameOver}
            >
              Player Two
            </Button>
          </CardActions>
          <div className="ScoreKeeper-winScore">
            <InputLabel id="win-score">Pick your win score: </InputLabel>
            <Select
              value={winScore}
              label="Score"
              onChange={(e) => (
                setWinScore(e.target.value), setP1(0), setP2(0)
              )}
            >
              {winScores.map((score) => (
                <MenuItem value={score}>{score}</MenuItem>
              ))}
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ScoreKeeper;
