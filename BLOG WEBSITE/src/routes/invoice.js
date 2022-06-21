import { Link } from 'react-router-dom';
import { getInvoices } from '../data';

function Invoice() {
    let invoicedata = getInvoices();
    return (
        <div style={{color:"red"}}>
        <h1>heiio INSIDE INVOICE SECTION IN ROUTES </h1>
        <nav
        style={{background:"pink"}}>
            {invoicedata.map((data)=>{
              return(
                // console.log(data.name);
                <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/invoices/${data.number}`}
                key={data.number}
              >
                {data.name}
              </Link>
              )
            })}
        
        </nav>
        </div>
        
    )
}

export default Invoice; 