import React, { useEffect, useState } from 'react';
import fetchData from '../../service/api/dataFetching';

import FooterLayouts from './FooterLayouts';

const CardCertificateLayouts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const result = await fetchData();
          setData(result);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      getData();
    }, []);
  
    if (loading) {
      return <div className='loading'>Loading...</div>;
    }
  
    if (error) {
      return <div className='loading'>Error: {error}</div>;
    }
    return (
        <div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div>
                <h2>42+ Certification</h2>
                <p>~ I actively study outside campus, looking for learning materials myself. Because the curriculum at my campus is not relevant to what the industry currently needs</p>
            </div>
            <hr />
            <div className="certificate">
                <h2>36 Certificate as UI Designer</h2>
                <br />
                <div className="card">
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/00 FIGMA FOR UI_UX DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-24/8/2023-LctlkK1CLjmZzTQJBhCv</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1cH302sYhmBxdRsClgBUZUfr2xgnslH8D/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/00 USER INTERFACE DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-24/8/2023-LctlkK1CLjmZzTQJBhCv</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1cH302sYhmBxdRsClgBUZUfr2xgnslH8D/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/01 INTRODUCTION TO FIGMA.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-4/8/2023-GLSNsqPU0WvD08M7rqt3</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1jovDA1FAmQfVBhCaT8XqIdAHqWeRu0Ci/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/02 FIGMA TOOLS.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-4/8/2023-82QraSvCG0ysCRq2WeZv</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1SMOW1_-nFRVli_j6RrPGn8cMVdGvHELK/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/03 WIREFRAMING FOR WEBSITE.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-4/8/2023-UuhSdO41ePZVkZo3RozQ</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/13QDZYe2SEM1k6wiIbcfdcomdxynjTqCL/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/04 MAKING DESIGN SYSTEM.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-4/8/2023-CvrdNjNLwkYhCGl8iwTi</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1o6jdQvi2angbYq96zD73R_OfY0vcUMYH/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/05 VARIANTS AND AUTO LAYOUT.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-5/8/2023-IP2MhQ4NjMf7naEBk0ql</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1BOVZ-HQWxLL538gP05o29NYEE69w1TFJ/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/06 STYLE GUIDE.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-5/8/2023-HezncOhzCOPTdSS8CSPs</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1Lk4KLVJYUKz_6aPJ81Rm9i7xUrqF4lxg/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/07 PLUGIN IN FIGMA.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-YqU9Lchqef4vAr4U3Ybz</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1ow430Y_IxA5Ou8lLTLJl7Qd1eCCtgCuY/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/08 MAKING HI-FI FOR UI DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-uFiUgKV0goImQKzeeMAT</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1YKUZ4dStJCp26G6ECewyhj4sPjR4eAb0/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/09 DESIGN DOCUMENTATION.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-thDJccs22jzCsCM5Ht3D</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1syFe7ONCK5ZV4SAxeArK_uksCC4GAGNy/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/10 UI DESIGN IMROVEMENT.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-3yLEMXYjVdBVjPngXXrz</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/13iHksvh_j-TjqrDCTvBqH8KH55UbE1_H/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/11 LANDING DASHBOARD UI.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-ZHPMRrJnYg717uLCmBJQ</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1bOQ_TJUUBYt6boU6wQ9tpV1QDLb0ar28/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/12 LANDING PAGE UI.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-cqxLhr2DQ6H89cD84eL7</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1Dosa3VC8fJqKTX1E1QyYgPEd0_SMbNQ_/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/13 DESIGNING ON BOARDING PROCESS.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-eR5vMAhvwgRnnd0vOaLj</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1f_ebm-qmylyl4pUYcv7Zw3X9LvIDZBUw/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/14 DESIGNING ON CHECKOUT PROCESS.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-7/8/2023-cEfMijzfelwg2mAEGOyZ</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1kMOKdjVa4QpJ5Go71ecSQYdyKxSCQQDF/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/15 DESIGNING PROFILE PAGE.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-8/8/2023-EcnYF6hVsXfqE2BO71hh</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1w8J50GBKe02wIjKy8G6jg5zALia9KWh_/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/16 PROTOTYPING USING FIGMA.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-11/8/2023-8QfJ2ZQj4FgweWyg88F5</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/11_uZkz71LIEdMPMiSRoAVvP9zo58fjur/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/17 PROTOTYPING USING FIGMA MIRROR.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-11/8/2023-1ifjhRgAi57ExOox3WjF</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1ckCKtkLJq0Da_okXVsdozEtlm_UJpfhV/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/18 FIGMA COMMUNITY.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-11/8/2023-xR53zXQlaJdkSd3RI8CM</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1KXH5QK1P6AV3GsRdIyZ_TR9HWIWY0Z-a/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/19 COLLABORATION IN FIGMA.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-11/8/2023-yD2S0oXUaskGcLeJdn9s</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1YjGyD6I7O2aTVtidE3YfJNlcqhBfns7X/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/20 FIGJAM INTRODUCTION.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-11/8/2023-yeXs0YCJK9aB6cDwUfQM</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1q_AQV60OMp2XamG8AX8MtttWWhmu-Z5r/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/21 FIGJAM FOR BRAINSTORMING & IDEATION.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-20/9/2023-hqi15awLusal0ee0gvcD</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/15gzD8g8PZhhlNvGYvatOeCo7FvFyT4GR/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design in Figma/22 OPERATING FIGJAM.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Nov 2022, Credential ID MS-20/9/2023-UDYe7SgDrIBFlEglaREr</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/15qv8oF17ZedDnnu7tljJvpTCmi3LZ5mB/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/01 UI DESIGN INTRODUCTION.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-vNFMYMeuKAMlnxyl5Nsm</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1iov6tvfdBfteg-IbsNUO42fZjSr857dH/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/02 DESIGN ELEMENTS.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-sxvPf6UFOeiZOCGAUWDG</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1UvMHpN53q2DgrGAG1JVZ6S0PUpgiDeBl/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/03 PRINCIPLE OF UI DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-vt7W1QQMVZZfIagSkE4e</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1aP9FEp1qsZyWblbfx9IRGjoh7ZQesAV4/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/04 LAW IN UI DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-b5Y0RlB3kvpMKLXiSIcD</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1nwoGyJdIv9KoKTz-4BDMqz2uyM86a01S/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/05 ICON DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-FqXwoFyG1z3Y9DoOsIjD</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/15-AtVMlut6_nHOsLtBDMfGTXdP9-rHuc/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/06 ILLUSTRATION DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-puVENey3Pu0W2sELgCmO</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1Ni_QJdTU8oaC0yz8vUbL4IvXpT3nYIee/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/07 COMPONENTS IN UI DESIGN.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-RLz5UvZwcvkAQ45ahFZj</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1G3jCLqwQb3sPFMpxHHkzYg1kFFyH_9Nz/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/08 DESIGNING DIGITAL PLATFORMS.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-lsAsekI1DM54wBYgu2AF</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1DPdVMtB0toVhKHNiZc5jMiITRNodVYB7/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/09 CREATING DESIGN SYSTEM.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-U4X7yQr88IzXJ3WNFMH9</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1wG8EEos9FCOt9Iuks-H53WQiSxAV_gEO/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/10 UI INTERACTION AND ANIMATION.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-5pKHqHAYb5r22YGesWWc</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1almfKPCqkeNyqtak6fPnigZ0cmjrjtoh/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/11 DESIGN PROCESS USING FIGMA.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-6cQqDpx6XrGOjYxdsQeC</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/10e-8tKPpvOp_IlISXY9b87t0yW2QHr-r/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <img src="/src/img/UI Design/12 UI DESIGN DOCUMENTATION.png" alt="img" />
                        <h3>MySkill</h3>
                        <p>Published Okt 2023, Credential ID MS-3/9/2023-6eDCwRZp1EgC6WHLqBfq</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1q1algr8HIiqn3HBCgsCYtBwxkFKtIAkB/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-right">
                        <h3>-</h3>
                        <p>Published -, Credential ID -</p>
                        <div className="tag">
                            <a href="#">View Certificates</a>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className="certificate">
            <h2>5 Certificate as UX Writing</h2>
            {/* <p>In this certificate course, I learned a lot about using Figma. from Figjam, Wireframing, Designing and Protoyping. I also learned basic UI Fundamentals and UX Fundamentals to become my foundation in designing.</p> */}
            <br />
            <div className="card">
                <div className="card-content" data-aos="zoom-in-right">
                    <img src="/src/img/UX Writing/00 UX WRITING.png" alt="img" />
                    <h3>MySkill</h3>
                    <p>Published Feb 2024, Credential ID MS-5/3/2024-hVbCMg00KQdwZsm8cFB5</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
                <div className="card-content" data-aos="zoom-in-right">
                    <img src="/src/img/UX Writing/01 UX WRITING INTRODUCTION.png" alt="img" />
                    <h3>MySkill</h3>
                    <p>Published Feb 2024, Credential ID MS-5/3/2024-syurrl63iynRmDEooQnL</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
                <div className="card-content" data-aos="zoom-in-right">
                    <img src="/src/img/UX Writing/02 TONE OF VOICE IN UX WRITING.png" alt="img" />
                    <h3>MySkill</h3>
                    <p>Published Feb 2024, Credential ID MS-5/3/2024-nfKRyQsGO1Qc7city73B</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
                <div className="card-content" data-aos="zoom-in-right">
                    <img src="/src/img/UX Writing/03 USER PSYCHOLOGY & ENGAGEMENT IN UX WRITING.png" alt="img" />
                    <h3>MySkill</h3>
                    <p>Published Feb 2024, Credential ID MS-5/3/2024-6sTFdBhMKbODwGWEdnaN</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
                <div className="card-content" data-aos="zoom-in-right">
                    <img src="/src/img/UX Writing/04 WRITING FOR UI COMPONENTS.png" alt="img" />
                    <h3>MySkill</h3>
                    <p>Published Feb 2024, Credential ID MS-5/3/2024-FTiqrbX2SDdfzCkpYnp5</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
                <div className="card-content" data-aos="zoom-in-right">
                    <img src="/src/img/UX Writing/05 UX WRITING TESTING AND DOCUMENTATION.png" alt="img" />
                    <h3>MySkill</h3>
                    <p>Published Feb 2024, Credential ID MS-5/3/2024-NG2Zcp0wLJR28ywKNUqo</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
                <div className="card-content" data-aos="zoom-in-right">
                    <h3>-</h3>
                    <p>Published -, Credential ID -</p>
                    <div className="tag">
                        <a href="">View Certificates</a>
                    </div>
                </div>
            </div>
            </div>
            <hr />
            <div className="certificate">
                <h2>1 Certificate Competition</h2><br />
                <div className="card">
                    <div className="card-content" data-aos="zoom-in-left">
                        <img src="/src/img/Competition/himatika.png" alt="img" />
                        <h3>HIMATIKA UTY</h3>
                        <p>Published Mar 2022, Credential ID -</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1l12IRE5lT5afjTrYmgJ0BRN5gQ_tji17/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-left">
                        <h3>-</h3>
                        <p>Published -, Credential ID -</p>
                        <div className="tag">
                            <a href="#">View Certificates</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="certificate">
                <h2>1 Certificate React Developer</h2><br />
                <div className="card">
                    <div className="card-content" data-aos="zoom-in-left">
                        <img src="/src/img/React/01.png" alt="img" />
                        <h3>Skilvul</h3>
                        <p>Published June 2024, Credential ID -</p>
                        <div className="tag">
                            <a href="https://drive.google.com/file/d/1l12IRE5lT5afjTrYmgJ0BRN5gQ_tji17/view?usp=drive_link">View Certificates</a>
                        </div>
                    </div>
                    <div className="card-content" data-aos="zoom-in-left">
                        <h3>-</h3>
                        <p>Published -, Credential ID -</p>
                        <div className="tag">
                            <a href="#">View Certificates</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="certificate">
                <h2>Certificate as Front-End Web Developer</h2>
                <div className="card">
                    {data.certificate.map((item) => (
                        <div className="card-content">
                            <img src={item.img} alt="img" />
                            <h3>{item.title}</h3>
                            <p>{item.published}</p>
                            <div className="tag">
                                <a href={item.link}>View Certificates</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterLayouts></FooterLayouts>
        </div>
    );
};

export default CardCertificateLayouts;