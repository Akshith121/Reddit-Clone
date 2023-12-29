import React from "react";
import "./Communities.css";

const Communities = () => {
    return (
        <div className="popular-communities-container">
            <p>POPULAR COMMUNITIES</p>
            <div className="communities-container">
                <img className="community-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkHAIs7zwtZUyakUC6RHU9JhiB-qTdaBliQ&usqp=CAU" />
                <div className="community">
                    <p>r/AskMen</p>
                    <p>567464 members</p>
                </div>
            </div>
            <div className="communities-container">
                <img className="community-image" src="data:image/png;base64,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" />
                <div className="community">
                    <p>r/headphones</p>
                    <p>567464 members</p>
                </div>
            </div>
            <div className="communities-container">
                <img className="community-image" src="https://i.ytimg.com/vi/sog3WGznvAA/sddefault.jpg" />
                <div className="community">
                    <p>r/Netflix</p>
                    <p>567464 members</p>
                </div>
            </div>
            <div className="communities-container">
                <img className="community-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAAC/v7/09PSioqLS0tIwMDD6+vrl5eV7e3vx8fF4eHjLy8tQUFBGRkarq6vY2NiOjo7e3t6EhIS3t7cXFxcMDAyampo+Pj5hYWHb29uwsLDs7OwgICCgoKBXV1dsbGwsLCyJiYm8vLxlZWU3NzckJCSrYnspAAAE5klEQVR4nO2d13KrQAyGg4MDbsENN1xTzvs/4okhTgyIErMrrTT67pmR/lkWrcry9KQoiqIoiqIoimKTPbUBTJj724Pn7ajNYMB04WX0qS1xnuTi3RhT2+I4vneHilVHz8sxpbbHYYaTvFZeSG2Ruyy9ItQWucuopFVMbZKzvJa08rbUNrnKS1krb01tlKNAWunHEKb4GdT9vZoFqNWA2iwneQe10pMhxBDW6oXaLicBgoYrS2q7XKQcuKesqO1yElgrr0dtl4usYa1eqe1ykoqFpfl3gCOslU9tl5PEoFYTarOcpA8vLGqz3GQAaqUZUhBQKz3ngISQVhphwUSqVXvKeXetFVZSTvrNqU1yl1VBqteA2iKHKWilcXsdOalOQ2pz3OZeKq3lNPAj1ZsG7Y0cPO8wWUT6CUwJ5j1/NjiPZlH/ue0zu2gwyYqum8nAH7d+jjXD5SCfgBkljVt4fw2UL0aJdMEisGizWdekQPtAQH8LwCI8y7GZV7vtvfjgOpnOqh/J1pfMnS08Nfh9ei88sV9fGh5JH5P3yQxqVtUv59/kQuiDPTQQ0tofKmqm0EI5ToNgvGitVIqopMTHn1x/gAW1h8YIi2kEC2yonTTE2L5UX8QiDtwJilZfCIhRoYS6HVbsc4QV/XtW+KR2tiMVtWVLnKnd7URFr6M1WJ8V/xZadmZG7W8X3lClilmfqaeoWp2p3e3GAVMr1ttVZfueHZgfpQNMrbhXzODRG9UKAnNhse9HakqeG4T/uCaeVidqVzuDeIBmn2yoGuqyAP85sWc0rQTkk/1mLw0hoON7i6WVgIWF9y1kH2JhJkipPTUA2pYlobhqvQJ9g3myIQVLKwlvIZpYEr6Fcyyx3qg9NUCv2U0z8D/qIJbsJezvaLks1sWvb1q1RJpAQpsRmljUjprgrGK1By3nQO2oCdDE4p9RRhRLwkU+aOdoCffoo23wEoJStNAhofbUAPDFOxaQkPtDO+5IuIgTrxBG7akB0FI0EnZ4vGbSEbWr3cEr3kt4D/HEKo4KM+SCJpaAkgVaCC+hMQQvdhBwgzDO8GoG+9YQ1Gkwamc7gzmJcqZ2titoeYcr3MMHvMnoK8wvWNmjisV98B5XrJh35QIt/ydBLcxIK4VzoQd12jCF87kHrRz2A+PhMLQraH555dtUgy+W5x2pnX6Upiv+rBAzrSTiVS3y8Dz8EInFM2WDOX5/B7XbjwH+5MQ6XCv6GwqxuDYwU2zxfG9nIxCL7/09qFf3ZFC73AF0rThPPiHesZLBOWWKnajh3VSDvLQ4ZwCxlxbvhYXa9cB7x0pB1IrzpzADMYyndtUA5b8VWoJp3i8HVnGa76nwnor/2JuGa7qhAMp11Px39wyMLGBM7aQxEBqQJEwefmO9LMa4Gl3C9qmHf8vyPZavauNbtwexGj8ImA3LYzGQ51r9qsHaD8MEjO+UsBZtse6QrMJS56SQY04RK7GpuM39hoWMPN+iaiPGG2skRe4lDP/jSbRWLQoY23XS6+92/V4yazxRSrhMspa6nPw2KRT+Qr/ujwWcO99bsr9UKAX3Nz5HFbnDE/vCVyuAc2J8rHF9B00v8mwdfYBh/qu4mjX+kamXH5z6FL9b3RMsv3fvw0fScrRynow+r+fLf9uI+TDmIwRhyLuRQ1EURVEURTHCf8eYSCcC+BLCAAAAAElFTkSuQmCC" />
                <div className="community">
                    <p>r/apple</p>
                    <p>567464 members</p>
                </div>
            </div>
            <div className="communities-container">
                <img className="community-image" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71XN6RnFchL._AC_UF1000,1000_QL80_.jpg" />
                <div className="community">
                    <p>r/PS4</p>
                    <p>567464 members</p>
                </div>
            </div>
            <div className="communities-container">
                <img className="community-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKro6Jte3W82KcpOhEEBrDIK3iVZd_tFFlzA&usqp=CAU" />
                <div className="community">
                    <p>r/pokemon</p>
                    <p>567464 members</p>
                </div>
            </div>
        </div>
    )
}

export default Communities