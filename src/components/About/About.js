import React from 'react';
import image from '../../img/istockphoto-1284193221-612x612.jpg'

const About = () => {
    return (
        <div className='container p-3 my-5'>
             <div>
            <h1>About Us</h1>
            <p>A warehouse management system (WMS) is a software solution that offers visibility into a business’ entire inventory and manages supply chain fulfillment operations from the distribution center to the store shelf. <br /> <br />

Warehouse Management (WMS) solutions additionally enable companies to maximize their labor and space utilization and equipment investments by coordinating and optimizing resource usage and material flows. Specifically, WMS systems are designed to support the needs of an entire global supply chain, including distribution, manufacturing, asset-intensive, and service businesses. <br /> <br />

In today’s dynamic, omnichannel, fulfillment economy, connected consumers want to buy anywhere, fulfill anywhere, and return anywhere. In order to be able to meet this need, businesses need the ability to respond quickly with warehouse management software that optimizes fulfillment capabilities. Our industry-leading, cloud-based warehouse management system prepares you for tomorrow’s supply chain, today. WMS Cloud extends supply chains to align inventory management and fulfillment services with modern purchasing methods, and offers real time visibility into an entire inventory—available via smart phone and browser—the only requirement being access to the Internet.</p>
</div>
     <div className='row  my-5 py-4'>
         <div className='col-lg-5 me-lg-3 '>
             <img width='100%' src={image} alt="" />

         </div>
         <div className='col-lg-5'>
             <h3>Future of DEPONIC Management</h3>
             <p>Oracle WMS Cloud represents a new paradigm in SCM software—a robust, next-generation, warehouse solution available at an outstanding value. New supply chain management functionality delivers innovative product features, mobile solutions, and a user-friendly interface. <br />

Companies invest in warehouse management software to streamline and automate inventory fulfillment processes, while also controlling costs. Dynamic and easily configurable, a robust WMS system can leverage the cloud for a rapid, cost-effective implementation that realizes the following benefits:</p>

         </div>
     </div>
     
            
        </div>
    );
};

export default About;