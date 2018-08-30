import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/he';


const GameCardPlayed = ({ game, gameLog }) => {
  const fromNow = () => {
    moment.locale('he');
    return moment(new Date(game.createdAt)).fromNow();
  };
  return (
    <div className="panel panel-default game-card">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-3">
            <img className="game-panel-img" src="/img/quiz-default.png" alt="game" />
          </div>
          <div className="col-md-4">
            <h5 className="game-title">
              {game.quiz.title}
            </h5>
            <p>
              <span className="game-owner-span">
                {`מריץ המשחק: ${Meteor.users.findOne(game.manager).username}`}
              </span>
            </p>
            <p>
              <span>
                {fromNow()}
              </span>
            </p>
          </div>
          <div className="col-md-5 game-card-buttons-area">
            <span>
              <div className="col-md-4">
                <div className="star game-card-link">
                  <span className="fa fa-trophy game-card-info-text-icon" />
                  <span className="game-card-link-text game-card-info-text">
                    מיקום <strong>{game.getPlaceByUserId(Meteor.userId(), gameLog)}</strong>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="star game-card-link">
                  <span className="fa fa-calculator game-card-info-text-icon" />
                  <span className="game-card-link-text game-card-info-text">
                    <strong>{game.getScoreByUserId(Meteor.userId(), gameLog)} </strong>נקודות
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <Link
                  to={`/Statistic/${game.code}`}
                  className="star game-card-link"
                >
                  <span className="fa fa-area-chart game-card-link-text-icon" />
                  <span className="game-card-link-text game-card-link-text">הצג סטטיסטיקות</span>
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

GameCardPlayed.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
  gameLog: PropTypes.arrayOf(Object).isRequired,
};

export default GameCardPlayed;
