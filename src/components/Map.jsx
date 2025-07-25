import React from 'react'

const Map = () => {
  return (
    <div>
       <div style={{ width: '100%', height: '400px' }}>
      <iframe
        title="Alok Brothers Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.634588335647!2d85.21825027511831!3d23.847256378604364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4bd10e80cb9d3%3A0xa3b2d1f5470da20b!2sAlok%20Brothers!5e1!3m2!1sen!2sin!4v1751629248702!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  )
}

export default Map