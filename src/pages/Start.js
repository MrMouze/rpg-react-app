import React from 'react';

import { BsPencil } from 'react-icons/bs';
import { GiBroadsword } from 'react-icons/gi';

import { Link } from 'react-router-dom';

import Button from '../components/Button';

import '../styles/start.css';

function Start() {
  return (
    <>
      <div class="mode-container">
        <h2>Você está jogando como:</h2>
        <div class="mode-choice-container">
            <Link to="/configfirebase">
              <Button>Mestre <BsPencil/> </Button>
            </Link>
            <Link to="/insertinvite">
            <Button>Jogador <GiBroadsword/></Button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Start;