import React from "react"

const Letters = function() {
    
    return (
        <div className="Letters">
            <table className="table">
                <thead className="table_header">
                    <tr>
                        <th>Letter/Combination</th>
                        <th>Description of the Sound</th>
                        <th>Similar or Identical Sound in English</th>
                        <th>Sample Czech Word</th>
                        <th>English Translation of Sample Word</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    <tr><td>A</td><td>short, open</td><td>r<span className="red">u</span>n</td><td>m<span className="red">a</span>p<span className="red">a</span></td><td>map</td></tr>
                    <tr><td>Á</td><td>same as above, but longer</td><td>f<span className="red">a</span>ll</td><td>s<span className="red">á</span>m</td><td>alone</td></tr>
                    <tr><td>B</td><td>same as in English</td><td><span className="red">b</span>ake</td><td><span className="red">b</span>ota</td><td>shoe</td></tr>
                    <tr><td>b (at the end of a word, or before an unvoiced consonant)</td><td>like a soft “p”</td><td>sho<span className="red">p</span></td><td>du<span className="red">b</span></td><td>oak</td></tr>
                    <tr><td>C</td><td>ts</td><td>Be<span className="red">ts</span>y</td><td>ko<span className="red">c</span>our</td><td>tomcat</td></tr>
                    <tr><td>Č</td><td>ch</td><td><span className="red">ch</span>air</td><td><span className="red">č</span>áp</td><td>stork</td></tr>
                    <tr><td>D</td><td>same as in English</td><td><span className="red">d</span>oor</td><td><span className="red">d</span>ům</td><td>house</td></tr>
                    <tr><td>d (at the end of a word, or before an unvoiced consonant)</td><td>like a soft “t”</td><td>ca<span className="red">t</span></td><td>ha<span className="red">d</span></td><td>snake</td></tr>
                    <tr><td>Ď</td><td>dy</td><td>di<span className="red">d y</span>ou</td><td>d<span className="red">ě</span>lo</td><td>cannon</td></tr>
                    <tr><td>ď (at the end of a word, or before an unvoiced consonant)</td><td>ty</td><td>no<span className="red">t y</span>et</td><td>lo<span className="red">ď</span></td><td>boat, ship</td></tr>
                    <tr><td>e</td><td>short “e”</td><td>b<span className="red">w</span>d</td><td>n<span className="red">e</span>b<span className="red">e</span></td><td>sky, heaven</td></tr>
                    <tr><td>é</td><td>same as above, but longer</td><td>b<span className="red">ea</span>r</td><td>mal<span className="red">é</span></td><td>small</td></tr>
                    <tr><td>ě</td><td>ye</td><td><span className="red">ye</span>t</td><td>v<span className="red">ě</span>da</td><td>science</td></tr>
                    <tr><td>f</td><td>same as in English</td><td><span className="red">f</span>all</td><td><span className="red">f</span>otka</td><td>photo</td></tr>
                    <tr><td>g</td><td>same as English hard “g”</td><td><span className="red">g</span>o</td><td><span className="red">g</span>aráž</td><td>garage</td></tr>
                    <tr><td>g (at the end of a word, or before an unvoiced consonant)</td><td>like a soft “k”</td><td>ro<span className="red">ck</span></td><td>gro<span className="red">g</span></td><td>grog</td></tr>
                    <tr><td>h</td><td>same as in English</td><td><span className="red">h</span>ot</td><td><span className="red">h</span>ad</td><td>snake</td></tr>
                    <tr><td>h (at the end of a word, or before an unvoiced consonant) </td><td>like a “k,” but without the hard stop</td><td>like the Scottish “ch” in “lo<span className="red">ch</span>” or German “a<span className="red">ch</span>”</td><td>ro<span className="red">h</span></td><td>corner</td></tr>
                    <tr><td>ch</td><td>same as above</td><td>same as above</td><td><span className="red">ch</span>ata</td><td>cabin</td></tr>
                    <tr><td>i</td><td>short “i”</td><td>sk<span className="red">i</span>n</td><td>p<span className="red">i</span>vo</td><td>beer</td></tr>
                    <tr><td>í</td><td>same as above, but longer</td><td>b<span className="red">ee</span>t</td><td>m<span className="red">í</span>t</td><td>to have</td></tr>
                    <tr><td>j</td><td>y</td><td><span className="red">y</span>es</td><td><span className="red">j</span>ablko</td><td>apple</td></tr>
                    <tr><td>k</td><td>same as in English, but not aspirated</td><td>boo<span className="red">k</span></td><td><span className="red">k</span>olo</td><td>wheel</td></tr>

                    <tr><td>l</td><td>same as in English, but a little crisper</td><td><span className="red">l</span>ift</td><td><span className="red">l</span>iška</td><td>fox</td></tr>
                    <tr><td>m</td><td>same as in English</td><td><span className="red">m</span>an</td><td><span className="red">m</span>atka</td><td>mother</td></tr>
                    <tr><td>n</td><td>same as in English</td><td>ma<span className="red">n</span></td><td><span className="red">n</span>oha</td><td>foot, leg</td></tr>
                    <tr><td>ň</td><td>ny</td><td>ca<span className="red">ny</span>on</td><td>zbra<span className="red">ň</span></td><td>weapon</td></tr>
                    <tr><td>o</td><td>short, rounded</td><td><span className="red">o</span>r</td><td>r<span className="red">o</span>k</td><td>year</td></tr>
                    <tr><td>ó</td><td>same as above, but longer</td><td>m<span className="red">o</span>re</td><td>j<span className="red">ó</span>d</td><td>iodine</td></tr>
                    <tr><td>p</td><td>same as in English, but not aspirated</td><td>sto<span className="red">p</span></td><td><span className="red">p</span>ata</td><td>heel</td></tr>
                    <tr><td>q</td><td>kv (occurs only in foreign words)</td><td>blan<span className="red">k v</span>erse</td><td><span className="red">qu</span>asi</td><td>quasi</td></tr>
                    <tr><td>r</td><td>trilled as in Spanish</td><td>th<span className="red">r</span>ee</td><td><span className="red">r</span>osa</td><td>dew</td></tr>
                    <tr><td>ř</td><td>trilled “r” together with “ž”</td><td>no English equivalent</td><td><span className="red">ř</span>ada</td><td>row, line</td></tr>
                    <tr><td>ř (at the end of a word, or before an unvoiced consonant)</td><td>trilled “r” together with “š”</td><td>no English equivalent</td><td>ke<span className="red">ř</span></td><td>bush</td></tr>
                    <tr><td>s</td><td>same as in English</td><td><span className="red">s</span>top</td><td>ro<span className="red">s</span>a</td><td>dew</td></tr>
                    <tr><td>š</td><td>sh</td><td>ru<span className="red">sh</span></td><td><span className="red">š</span>aty</td><td>dress, suit</td></tr>
                    <tr><td>t</td><td>same as in English, but not aspirated</td><td>ca<span className="red">t</span></td><td><span className="red">t</span>ele</td><td>calf</td></tr>
                    <tr><td>ť</td><td>ty</td><td>no<span className="red">t y</span>et</td><td>sí<span className="red">ť</span></td><td>net</td></tr>
                    <tr><td>u</td><td>short, rounded</td><td>p<span className="red">u</span>t</td><td>r<span className="red">u</span>ka</td><td>hand</td></tr>
                    <tr><td>ú</td><td>same as above, but longer; occurs only at the beginning of a word</td><td>sp<span className="red">oo</span>n</td><td><span className="red">ú</span>sta</td><td>mouth</td></tr>
                    <tr><td>ů</td><td>same as above; occurs only in the middle or at the end of a word</td><td>sp<span className="red">oo</span>n</td><td>m<span className="red">ů</span>ra</td><td>moth</td></tr>
                    <tr><td>v</td><td>same as in English</td><td><span className="red">v</span>ery</td><td><span className="red">v</span>ana</td><td>bathtub</td></tr>
                    <tr><td>v (at the end of a word, or before an unvoiced consonant)</td><td>f</td><td>o<span className="red">ff</span></td><td>ko<span className="red">v</span></td><td>metal</td></tr>
                    <tr><td>w</td><td>v (occurs only in foreign words)</td><td><span className="red">v</span>ery</td><td><span className="red">w</span>att</td><td>watt</td></tr>
                    <tr><td>x (occurs mostly in foreign words)</td><td>ks</td><td>a<span className="red">x</span>e</td><td><span className="red">x</span>erografie</td><td>xerography</td></tr>
                    <tr><td>y</td><td>same as “i” above</td><td>sk<span className="red">i</span>n</td><td>r<span className="red">y</span>ba</td><td>fish</td></tr>
                    <tr><td>ý</td><td>same as above, but longer</td><td>b<span className="red">ee</span>t</td><td>b<span className="red">ý</span>k</td><td>bull</td></tr>
                    <tr><td>z</td><td>same as in English</td><td>ra<span className="red">z</span>or</td><td><span className="red">z</span>lato</td><td>gold</td></tr>
                    <tr><td>z (at the end of a word, or before an unvoiced consonant)</td><td>s</td><td>cla<span className="red">ss</span></td><td>obra<span className="red">z</span></td><td>picture</td></tr>
                    <tr><td>ž</td><td>zh</td><td>mea<span className="red">s</span>ure</td><td><span className="red">ž</span>ába</td><td>frog</td></tr>
                    <tr><td>ž (at the end of a word, or before an unvoiced consonant)</td><td>sh</td><td>da<span className="red">sh</span></td><td>nů<span className="red">ž</span></td><td>knife</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default Letters