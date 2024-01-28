import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Arrow from '../../assets/images/arrow.svg'

const TabsAccordion = ({ products }) => {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Additional Information</Tab>
                    <Tab>Reviews</Tab>
                </TabList>
                <TabPanel>
                    <h2 className='text-darkBlue text-3xl font-extrabold mb-6'>Description</h2>
                    <p className='text-darkBlue text-lg font-normal mb-6'>{products?.attributes?.description}</p>
                    <ul>{products?.attributes?.listDescription?.map((itemDesc, index) => <li key={index} className='flex flex-row gap-4 text-dark text-lg font-normal mb-2'><img src={Arrow} />{itemDesc}</li>)}</ul>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-darkBlue text-3xl font-extrabold mb-6'>Additional Information</h2>
                    <p className='text-darkBlue text-lg font-normal mb-6'>{products?.attributes?.additionalInfo}</p>
                    <ul>{products?.attributes?.listAdditionalInfo?.map(itemAdditional => <li key={products.id} className='flex flex-row gap-4 text-dark text-lg font-normal mb-2'><img src={Arrow} />{itemAdditional}</li>)}</ul>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-darkBlue text-3xl font-extrabold mb-6'>Reviews</h2>
                    <p p className='text-darkBlue text-lg font-normal' > Reviews</p>
                </TabPanel>
            </Tabs>
        </>
    )
}


export default TabsAccordion

