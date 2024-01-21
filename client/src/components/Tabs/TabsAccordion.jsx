import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const TabsAccordion = ({ products }) => {
    console.log(products?.attributes)
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
                    <p className='text-darkBlue text-lg font-normal'>{products?.attributes?.description}</p>
                    <ul>{products?.attributes.listDescription.map(itemDesc => <li>{itemDesc}</li>)}</ul>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-darkBlue text-3xl font-extrabold mb-6'>Additional Information</h2>
                    <p className='text-darkBlue text-lg font-normal'>{products?.attributes?.additionalInfo}</p>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-darkBlue text-3xl font-extrabold mb-6'>Reviews</h2>
                    <p className='text-darkBlue text-lg font-normal'>Reviews</p>
                </TabPanel>
            </Tabs>
        </>
    )
}


export default TabsAccordion

