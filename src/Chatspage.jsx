// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
// import PropTypes from 'prop-types';
// const ChatsPage = (props) => {
//     const chatProps=useMultiChatLogic('9d311245-5583-4038-9856-b5be0490a3c5',props.username,props.user.secret);
    
//     return (
//     <div style={{height:'100vh'}}>  
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{height:'100%'}} />
//     </div>
//     )
//   };

//   ChatsPage.propTypes = {
//     onAuth: PropTypes.func.isRequired,
//   };

//   export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='9d311245-5583-4038-9856-b5be0490a3c5'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

ChatsPage.propTypes = {
    username: PropTypes.string.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;