import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Reset() {
  const { setSelections } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSelections({ relationship: '', gift: null, date: '', time: '', note: '', accepted: false });
    navigate('/', { replace: true });
  }, []);

  return null;
}