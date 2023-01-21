import React,{useState, useEffect} from 'react'
import { FinanceData } from './FinanceData';
import { GeneralInfo } from './generalInfo';
import { JobExecution } from './jobExecution';
import { OrganisationInfo } from './organisationInfo';
import { SupplyCat } from './supplyCat';
import { TaxDetails } from './taxDetails';
import { UploadDoc } from './uploadDoc';

export const VendorKyc = () => {

    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };

  useEffect(() => {
    window.scrollTo({
      top: 40,
      left: 0,
      behavior: 'smooth',
    });
  }, [open])
  const activeStyle = {
    borderBottom: "4px solid #EC8B20",
    color: "#3F79AD"
  }

  return (
    <div className='w-full '>
        <div className='w-full'>
            <div className='flex lg:w-full w-full overflow-x-auto fs-500 text-center fw-500'>
                <div 
                    style={(open === 1 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(1)}
                    >
                    General Information
                </div>
                <div 
                    style={(open === 2 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(2)}
                    >
                    Organisation Information
                </div>
                <div 
                    style={(open === 3 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(3)}
                    >
                    Tax Details and Permits
                </div>
                <div 
                    style={(open === 4 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(4)}
                    >
                    Work/Job Execution Experience
                </div>
                <div 
                    style={(open === 5 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(5)}
                    >
                    Categories of Supply
                </div>
                <div 
                    style={(open === 6 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(6)}
                    >
                    Financial Data
                </div>
                <div 
                    style={(open === 7 ? activeStyle : undefined)}
                    className='px-3 w-36 lg:w-auto cursor-pointer' 
                    onClick={() => handleOpen(7)}
                    >
                    Upload Documents
                </div>
            </div>
        </div>
        <div className='mt-6 lg:mt-10'>
            {
                open === 1? <GeneralInfo handleOpen={handleOpen} /> : ""
            }
            {
                open === 2? <OrganisationInfo handleOpen={handleOpen} /> : ""
            }
            {
                open === 3? <TaxDetails handleOpen={handleOpen} /> : ""
            }
            {
                open === 4? <JobExecution handleOpen={handleOpen} />: ""
            }
            {
                open === 5? <SupplyCat handleOpen={handleOpen}/> : ""
            }
            {
                open === 6? <FinanceData handleOpen={handleOpen}/> : ""
            }
            {
                open === 7? <UploadDoc handleOpen={handleOpen}/> : ""
            }
        </div>
    </div>
  )
}
