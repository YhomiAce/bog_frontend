import React, {useEffect, useState} from 'react'
import { AiOutlinePrinter } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { GiBackwardTime } from 'react-icons/gi';
import JsPDF from 'jspdf';

// formatting number to currency
const formatNumber = (number) => {
    return '₦' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// formatting number to percengtage
const displayPercent = (percent, fallback, digits = 2) =>
  (percent === null || percent === undefined) ? fallback : `${(percent * 100).toFixed(digits)}%`;

// rates for residential
export const secRate = 29854.00
export const frameRate = 25635.00
export const upperRate = 28790.00
export const roofRate = 16790.00
export const stairRate = 12359.52
export const wallsRate = 13795.00
export const windowRate = 14789.00
export const doorRate = 15689.00
export const wallFinishRate = 12324.55
export const floorFinishRate = 18911.20
export const ceilFinishRate = 14520.31
export const fittsRate = 26745.00
export const sadiRate = 14783.00
export const hcwsRate = 10954.26
export const aciRate = 10379.63
export const electricRate = 29295.37
export const buildWorkRate = 4673.00
export const lapRate = 13753.00
export const drainRate = 23568.00
export const externalRate = 27863.00
export const fencingRate = 12465.00

export const Calculator = () => {

    const initialValues = { type: "", floor: ""};

    const [formValues, setFormValues] = useState(initialValues)
    const [formField, setFormField] = useState(true);
    const [formResult, setFormResult] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormField(false)
        setFormResult(true)
        SmartCalc()
      }
    useEffect (() => {
       if(formResult === true){
        SmartCalc()
       }
    }, [formResult])
    const SmartCalc = () => {
        
        let sec = document.getElementById("sec")
        let frame = document.getElementById("frame")
        let upper = document.getElementById("upper")
        let roof = document.getElementById("roof")
        let stair = document.getElementById("stair")
        let walls = document.getElementById("walls")
        let windows = document.getElementById("windows")
        let doors = document.getElementById("doors")
        let wallFinish = document.getElementById("wallFinish")
        let floorFinish = document.getElementById("floorFinish")
        let ceilFinish = document.getElementById("ceilFinish")
        let fitts = document.getElementById("fitts")
        let sadi = document.getElementById("sadi")
        let hcws = document.getElementById("hcws")
        let aci = document.getElementById("aci")
        let electric = document.getElementById("electric")
        let buildWork = document.getElementById("buildWork")
        let subTotalBuild = document.getElementById("subTotalBuild")
        let lap = document.getElementById("lap")
        let drain = document.getElementById("drain")
        let external = document.getElementById("external")
        let fencing = document.getElementById("fencing")
        let subTotalConstruct = document.getElementById("subTotalConstruct")

        let secPer = document.getElementById("secPer")
        let framePer = document.getElementById("framePer")
        let upperPer = document.getElementById("upperPer")
        let roofPer = document.getElementById("roofPer")
        let stairPer = document.getElementById("stairPer")
        let wallsPer = document.getElementById("wallsPer")
        let windowsPer = document.getElementById("windowsPer")
        let doorsPer = document.getElementById("doorsPer")
        let wallFinishPer = document.getElementById("wallFinishPer")
        let floorFinishPer = document.getElementById("floorFinishPer")
        let ceilFinishPer = document.getElementById("ceilFinishPer")
        let fittsPer = document.getElementById("fittsPer")
        let sadiPer = document.getElementById("sadiPer")
        let hcwsPer = document.getElementById("hcwsPer")
        let aciPer = document.getElementById("aciPer")
        let electricPer = document.getElementById("electricPer")
        let buildWorkPer = document.getElementById("buildWorkPer")
        let lapPer = document.getElementById("lapPer")
        let drainPer = document.getElementById("drainPer")
        let externalPer = document.getElementById("externalPer")
        let fencingPer = document.getElementById("fencingPer")

        let fees = document.getElementById("fees")
        let contigency = document.getElementById("contigency")
        let vat = document.getElementById("vat")
        let total = document.getElementById("total")


        if(formValues.type === "Residential") {
            sec.innerHTML  = formatNumber (secRate * formValues.floor);
            frame.innerHTML  = formatNumber(frameRate * formValues.floor);
            upper.innerHTML = formatNumber(upperRate * formValues.floor);
            roof.innerHTML = formatNumber(roofRate * formValues.floor);
            stair.innerHTML  = formatNumber(stairRate * formValues.floor);
            walls.innerHTML  = formatNumber(wallsRate * formValues.floor);
            windows.innerHTML  = formatNumber(windowRate * formValues.floor);
            doors.innerHTML  = formatNumber(doorRate * formValues.floor);
            wallFinish.innerHTML  = formatNumber(wallFinishRate * formValues.floor);
            floorFinish.innerHTML  = formatNumber(floorFinishRate * formValues.floor);
            ceilFinish.innerHTML  = formatNumber(ceilFinishRate * formValues.floor);
            fitts.innerHTML  = formatNumber(fittsRate * formValues.floor);
            sadi.innerHTML  = formatNumber(sadiRate * formValues.floor);
            hcws.innerHTML  = formatNumber(hcwsRate * formValues.floor);
            aci.innerHTML  = formatNumber(aciRate * formValues.floor);
            electric.innerHTML  = formatNumber(electricRate * formValues.floor);
            buildWork.innerHTML  = formatNumber(buildWorkRate * formValues.floor);
            lap.innerHTML  = formatNumber(lapRate * formValues.floor);
            drain.innerHTML  = formatNumber(drainRate * formValues.floor);
            external.innerHTML  = formatNumber(externalRate * formValues.floor);
            fencing.innerHTML  = formatNumber(fencingRate * formValues.floor);
            let TotalBuild  = parseInt(secRate * formValues.floor + frameRate * formValues.floor + upperRate * formValues.floor + roofRate * formValues.floor + stairRate * formValues.floor + wallsRate * formValues.floor + windowRate * formValues.floor
                + doorRate * formValues.floor + wallFinishRate * formValues.floor + floorFinishRate * formValues.floor + ceilFinishRate * formValues.floor + fittsRate * formValues.floor + sadiRate * formValues.floor + hcwsRate * formValues.floor + aciRate * formValues.floor + electricRate * formValues.floor + buildWorkRate * formValues.floor);
            subTotalBuild.innerHTML = formatNumber(TotalBuild)
            let TotalConstruct = parseInt(TotalBuild) + lapRate * formValues.floor + drainRate * formValues.floor + externalRate * formValues.floor + fencingRate * formValues.floor ;
            subTotalConstruct.innerHTML = formatNumber(TotalConstruct)

            // percentages
            secPer.innerHTML = displayPercent((secRate * formValues.floor) / TotalConstruct )
            framePer.innerHTML = displayPercent((frameRate * formValues.floor) / TotalConstruct )
            upperPer.innerHTML = displayPercent((upperRate * formValues.floor) / TotalConstruct )
            roofPer.innerHTML = displayPercent((roofRate * formValues.floor) / TotalConstruct )
            stairPer.innerHTML = displayPercent((stairRate * formValues.floor) / TotalConstruct )
            wallsPer.innerHTML = displayPercent((wallsRate * formValues.floor) / TotalConstruct )
            windowsPer.innerHTML = displayPercent((windowRate * formValues.floor) / TotalConstruct )
            doorsPer.innerHTML = displayPercent((doorRate * formValues.floor) / TotalConstruct )
            wallFinishPer.innerHTML = displayPercent((wallFinishRate * formValues.floor) / TotalConstruct )
            floorFinishPer.innerHTML = displayPercent((floorFinishRate * formValues.floor) / TotalConstruct )
            ceilFinishPer.innerHTML = displayPercent((ceilFinishRate * formValues.floor) / TotalConstruct )
            fittsPer.innerHTML = displayPercent((fittsRate * formValues.floor) / TotalConstruct )
            sadiPer.innerHTML = displayPercent((sadiRate * formValues.floor) / TotalConstruct )
            hcwsPer.innerHTML = displayPercent((hcwsRate * formValues.floor) / TotalConstruct )
            aciPer.innerHTML = displayPercent((aciRate * formValues.floor) / TotalConstruct )
            electricPer.innerHTML = displayPercent((electricRate * formValues.floor) / TotalConstruct )
            buildWorkPer.innerHTML = displayPercent((buildWorkRate * formValues.floor) / TotalConstruct )
            lapPer.innerHTML = displayPercent((lapRate * formValues.floor) / TotalConstruct )
            drainPer.innerHTML = displayPercent((drainRate * formValues.floor) / TotalConstruct )
            externalPer.innerHTML = displayPercent((externalRate * formValues.floor) / TotalConstruct )
            fencingPer.innerHTML = displayPercent((fencingRate * formValues.floor) / TotalConstruct )

            // total pricing
            let fee = (0.1 * TotalConstruct)
            fees.innerHTML = formatNumber(fee)
            let contigencies = (0.05 * TotalConstruct)
            contigency.innerHTML = formatNumber(contigencies)
            let vats = (0.075 * TotalConstruct)
            vat.innerHTML = formatNumber(vats)
            total.innerHTML = formatNumber(TotalConstruct + fee + contigencies + vats)
        }
        else if(formValues.type === "mall"){
        }
    }
    const generatePDF = () => {

        const width = document.getElementById('report').offsetWidth
        const height = document.getElementById('report').offsetHeight

        const report = new JsPDF('p','pt',[width, height]);
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }
    
    
  return (
    <div className='pt-12'>
        {
            formField && (
                <div className='lg:w-5/12 bg-app bg-cover text-white bg-primary lg:p-8 p-4 rounded-lg shadow-lg mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div onChange={handleChange.bind(this)}>
                            <label className='fw-500 fs-700'>Type of building</label>
                            <div className='flex justify-between mt-4'>
                                <div className='flex items-center'>
                                    <input type="radio" name="type" value="Residential" className='w-6 h-6' required/>
                                    <label className='pl-2'>Residential</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name="type" value="mall" className='w-6 h-6' />
                                    <label className='pl-2'>Shoping mall</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name="type" value="Religious" className='w-6 h-6' />
                                    <label className='pl-2'>Religious</label>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label  className='fw-500 block fs-700'>Total floor area in m2</label>
                            <input type="number" name='floor' value={ formValues.floor} onChange={handleChange} className='lg:w-8/12 p-2 rounded mt-3 text-black' required />
                        </div>
                        <div className='mt-8'>
                            <button className='btn bg-secondary fw-600 w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            )
        }
        {
            formResult && (
                <div className='lg:w-10/12 scale-ani mx-auto bg-white p-8 rounded-lg shadow-md' id='report'>
                    <div className='pb-6 fw-600 lg:text-xl'>
                        <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669563824/BOG/logo_1_1_ubgtnr.png' alt="logo" className='lg:w-28 w-20 mx-auto'/> 
                        <p className='text-center mt-3'>Building Cost Results</p>
                        <FaTimes className='absolute right-8 top-8 cursor-pointer' onClick={() => {setFormResult(false);setFormField(true)}}/>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead className="thead-light bg-primary">
                                <tr>
                                        <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Element
                                        </th>
                                        <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Elemental Cost
                                        </th>
                                        <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Percentage of Cost
                                        </th>
                                        <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Rate per m2
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Substructure</td>
                                    <td id='sec' className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id='secPer' className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(secRate)}</td>
                                </tr>
                                <tr>
                                    <td className='fw-600 py-3 px-2'>Superstructure</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Frame</td>
                                    <td id="frame" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td  id="framePer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(frameRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Upper floor</td>
                                    <td id="upper" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="upperPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(upperRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Roof</td>
                                    <td id="roof" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="roofPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(roofRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Stair Cases</td>
                                    <td id="stair" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="stairPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(stairRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Internal and External walls</td>
                                    <td id="walls" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="wallsPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(wallsRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Aluminium windows</td>
                                    <td id="windows" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="windowsPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(windowRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Internal and External doors</td>
                                    <td id="doors" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="doorsPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(doorRate)}</td>
                                </tr>
                                <tr>
                                    <td className='fw-600 pt-2 px-2'>Finishes</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Wall Finishes</td>
                                    <td id="wallFinish" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="wallFinishPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(wallFinishRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Floor Finishes</td>
                                    <td id="floorFinish" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="floorFinishPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(floorFinishRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Ceiling Finishes</td>
                                    <td id="ceilFinish" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="ceilFinishPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(ceilFinishRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b fw-600 border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Fittings and Furnishing</td>
                                    <td id="fitts" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="fittsPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(fittsRate)}</td>
                                </tr>
                                <tr>
                                    <td className='pt-3 fw-600 px-2'>Mechanical and Electrical Installation</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Sanitary appliances / Disposal installation</td>
                                    <td id="sadi" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="sadiPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(sadiRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Hot and Cold water services</td>
                                    <td id="hcws" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="hcwsPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(hcwsRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Air conditioning installation</td>
                                    <td id="aci" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="aciPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(aciRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Electrical installation</td>
                                    <td id="electric" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="electricPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(electricRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Builder's work</td>
                                    <td id="buildWork" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="buildWorkPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(buildWorkRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 fw-600 align-middle  whitespace-nowrap px-2 py-3 text-left">SUB-TOTAL BUILDING WORKS</td>
                                    <td id="subTotalBuild" className="border-b border-gray-200 fw-600 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Landscaping and Paving</td>
                                    <td id="lap" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="lapPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(lapRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Drains</td>
                                    <td id="drain" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="drainPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(drainRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">External services (water and lighting)</td>
                                    <td id="external" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="externalPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(externalRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">Fencing (Privisional)</td>
                                    <td id="fencing" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td id="fencingPer" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">{formatNumber(fencingRate)}</td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle fw-600 whitespace-nowrap px-2 py-3 text-left">SUB-TOTAL CONSTRUCTION WORKS</td>
                                    <td id="subTotalConstruct" className="border-b border-gray-200 align-middle fw-600  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle fw-600 whitespace-nowrap px-2 py-3 text-left">Professional Fees</td>
                                    <td id="fees" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">10%</td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle fw-600 whitespace-nowrap px-2 py-3 text-left">Contigencies</td>
                                    <td id="contigency" className="border-b border-gray-200 align-middle fw-600 whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">5%</td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle fw-600 whitespace-nowrap px-2 py-3 text-left">VAT</td>
                                    <td id="vat" className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left">7.5%</td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 align-middle fw-700 text-lg whitespace-nowrap px-2 py-3 text-left">Total</td>
                                    <td id="total" className="border-b border-gray-200 align-middle fw-700 text-lg whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                    <td className="border-b border-gray-200 align-middle  whitespace-nowrap px-2 py-3 text-left"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex items-center mt-8 justify-end'>
                        <p className='flex fw-600 items-center pr-4' onClick={generatePDF}><span className='pr-2'><AiOutlinePrinter/></span>Save</p>
                        <p onClick={() => {setFormResult(false);setFormField(true)}} className="flex text-primary items-center justify-end fw-500 cursor-pointer"><GiBackwardTime/> <span className='pl-2'>Back to Form</span></p>
                    </div>
                </div>
            )
        }
    </div>
  )
}