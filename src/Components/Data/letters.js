import React from "react"

const Letters = function() {
    
    return (
        <div className="Letters">
            <table className="table">
                <thead>
                    <tr>
                        <th>Letter/Combination</th>
                        <th>Description of the Sound</th>
                        <th>Similar or Identical Sound in English</th>
                        <th>Sample Czech Word</th>
                        <th>English Translation of Sample Word</th>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>short, open</td>
                        <td>run</td>
                        <td>mapa</td>
                        <td>map</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Letters