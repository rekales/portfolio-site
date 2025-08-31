import { useEffect, useState } from "react";

import "./DownloadCount.css"

function ModrinthDownloadCount() {

    const [count, setCount] = useState(null);

    useEffect(() => {
        async function fetchCount() {
            const res = await fetch("https://api.modrinth.com/v2/user/Krei/projects")
            const json = await res.json();
            let totalCount = 0;
            for (const mod of json) {
                totalCount += mod.downloads;
            }
            
            const formatter = new Intl.NumberFormat("en", {
                notation: "compact",
                maximumFractionDigits: 2
            });
            setCount(formatter.format(totalCount));        
        }
        fetchCount();
    }, [])

    if (!count) return null;

    return (
        <div className="download-count-container">
            {count != null && <p className="download-count-number">{count}</p>}
            <p className="download-count-header">Modrinth Total Downloads</p>
        </div>
    );
}

export default ModrinthDownloadCount;