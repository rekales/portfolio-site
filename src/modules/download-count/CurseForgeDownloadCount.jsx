import { useEffect, useState } from "react";

import "./DownloadCount.css"

function CurseForgeDownloadCount() {

    const [count, setCount] = useState(null);

    useEffect(() => {
        async function fetchCount() {
            const res = await fetch("https://www.curseforge.com/api/v1/mods/by-user-id/101437847?index=0&pageSize=20&sortOrder=Desc&&sortField=ReleaseDate")
            const json = await res.json();
            let totalCount = 0;
            for (const mod of json.data) {
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
            <p className="download-count-header">CurseForge Total Downloads</p>
        </div>
    );
}

export default CurseForgeDownloadCount;