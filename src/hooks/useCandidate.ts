import { useState } from 'react';
import { Candidate, mockCandidate } from '../data/candidate';

export const useCandidate = () => {
    const [candidate, setCandidate] = useState<Candidate>(mockCandidate);

    const updateCandidate = (updatedDetails: Partial<Candidate>) => {
        setCandidate(prevCandidate => ({ ...prevCandidate, ...updatedDetails }));
    };

    return { candidate, updateCandidate };
};
