import React from 'react';
import { Link } from 'react-router-dom';
import { videoBanner, videoBg, videoShape1, videoShape2 } from '../assets/images';

const Video = () => {
  return (
    <section
    className="video has-bg-image"
    aria-label="video"
    style={{ backgroundImage: `url(${videoBg})` }}
  >
      <div className="container">
        <div className="video-card">
          <div className="video-banner img-holder has-after" style={{ '--width': '', '--height': '' }}>
            <img
              src={videoBanner}
              width="970"
              height="550"
              loading="lazy"
              alt="video banner"
              className="img-cover"
            />
            <Link to="#" className="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
            </Link>
          </div>
          <img src={videoShape1} width="1089" height="605" loading="lazy" alt="" className="shape video-shape-1" />
          <img src={videoShape2} width="158" height="174" loading="lazy" alt="" className="shape video-shape-2" />
        </div>
      </div>
    </section>
  );
};

export default Video;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiPlay } from 'react-icons/fi';
// import Modal from 'react-modal';
// import { academic, videoBanner, videoShape1, videoShape2 } from '../assets/images';

// const Video = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section className="video has-bg-image" aria-label="video" style={{ backgroundImage: `url(${videoBanner})` }}>
//       <div className="container">
//         <div className="video-card">
//           <div className="video-banner img-holder has-after" style={{ width: '970px', height: '550px' }}>
//             <img src={videoBanner} width="970" height="550" loading="lazy" alt="video banner" className="img-cover" />
//             <button className="play-btn" aria-label="play video" onClick={openModal}>
//               <FiPlay aria-hidden="true" />
//             </button>
//           </div>
//           <img src={videoShape1} width="1089" height="605" loading="lazy" alt="" className="shape video-shape-1" />
//           <img src={videoShape2} width="158" height="174" loading="lazy" alt="" className="shape video-shape-2" />
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false} className="video-modal">
//         <button className="modal-close-btn" aria-label="Close" onClick={closeModal}>
//           <span aria-hidden="true">&times;</span>
//         </button>
//         <video controls autoPlay style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
//           <source src={academic} type="video/mp4" />
//         </video>
//       </Modal>
//     </section>
//   );
// };

// export default Video;
