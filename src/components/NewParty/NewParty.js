import '../../styles/NewParty.css';

import Card from '../UI/Card';
import NewPartyForm from './NewPartyForm';
import Parties from '../Parties/Parties';

const NewParty = () => {
  return (
    // TODO: NewParty
    <Card className="new-party">
      <NewPartyForm />
      <Parties />
    </Card>
  );
};

export default NewParty;
