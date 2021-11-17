import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './ConcordanceFilter.css'
// useSelector is for accessing and useDispatch is for modifying values of our states
import { useSelector, useDispatch } from 'react-redux'
import { updateDivision } from '../features/division';

const ConcordanceFilter = () => {
  const division = useSelector((state) => state.division.value)
  const dispatch = useDispatch()

  const handleChange = (event, newDivision) => {
    if (newDivision !== null) {
        dispatch(updateDivision(newDivision));
      }
  };

  return (
    <div id='concordance-filter-div'>
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={division}
          exclusive
          onChange={handleChange}
          id='filter-btn-group'
        >
          <ToggleButton value="isBeginner">Beginner</ToggleButton>
          <ToggleButton value="isJunior">Junior</ToggleButton>
          <ToggleButton value="isIntermediate">Intermediate</ToggleButton>
          <ToggleButton value="isExperienced">Experienced</ToggleButton>
        </ToggleButtonGroup>
    </div>
  );
}

export default ConcordanceFilter
