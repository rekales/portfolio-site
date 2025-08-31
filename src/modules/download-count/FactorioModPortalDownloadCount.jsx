import { useEffect, useState } from "react";

import "./DownloadCount.css"

function FactorioModPortalDownloadCount() {

    const [count, setCount] = useState(null);

    useEffect(() => {
        async function fetchCount() {
            console.log("started");
            const res = await fetch("https://proxy.corsfix.com/?https://mods.factorio.com/api/mods?namelist=agri-no-spoil%2Cspoilage-scanner%2Cfire-starter%2Cspace-exploration-stuff")
            const json = await res.json();
            let totalCount = 0;
            for (const mod of json.results) {
                totalCount += mod.downloads_count;
            }

            console.log(json);

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
            <p className="download-count-header">Mod Portal Total Downloads</p>
        </div>
    );
}

export default FactorioModPortalDownloadCount;