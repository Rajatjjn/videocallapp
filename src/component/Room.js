import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

export default function Room() {
    const {roomID}=useParams();
    let mymeeting=async(element)=>{
         // generate Kit Token
      const appID = 542750234;
      const serverSecret = "36b92f025f6d6c5bb8b7971838c8eaf8";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"Rajat");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
          // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'copy link',
            url:`http://localhost3000/room/${roomID}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showRoomTimer:true
      });

    }
  return (
    <div ref={mymeeting} className='divv' >
  
    </div>
  )
}
