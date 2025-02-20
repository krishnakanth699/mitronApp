import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { joinQueue } from '../services/api';
import socket from '../services/socket';

const Queue = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Get user ID from local storage
    joinQueue(userId).then(() => {
      console.log('Joined queue');
    });

    // Listen for match event
    socket.on('match', (groupId) => {
      navigate(`/chat?groupId=${groupId}`); // Redirect to chat page
    });

    return () => {
      socket.off('match');
    };
  }, [navigate]);

  return (
    <div>
      <h1>Waiting for a match...</h1>
    </div>
  );
};

export default Queue;