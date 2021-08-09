class suitGame {
    constructor() {

    }
    pilihanKomputer() {
        const pilih = ["batu", "kertas", "gunting"];
        const angkaRandom = Math.floor(Math.random() * 3);
        return pilih[angkaRandom];
    };
    pilPlayer (pilihan) {
        if(pilihan === "batu") {
            return  "batu";
        } else if(pilihan === "kertas") {
            return "kertas";
        } else {
            return "gunting";
        }
    }
    mainan(pilihanPemain, komputer) {
        // cek seri
        if(pilihanPemain == komputer) {
            versus.classList.add("d-none")
            console.log("draw!");
            console.log("player 1 choose : " + pilihanPemain);
            console.log("and com choose : " + komputer);
            return "draw";
        }
        // cek batu
        if(pilihanPemain === "batu") {
            if(komputer === "gunting") {
                document.getElementById("parentBatu1").style.backgroundColor="#C4C4C4";
                document.getElementById("parentGunting2").style.backgroundColor="#C4C4C4";
                const versus = document.getElementById("vs");
                versus.classList.add("d-none")
                console.log("player 1 win");
                console.log("player 1 choose : " + pilihanPemain);
                console.log("and com choose : " + komputer); 
            return "player 1 win";
            } else {
                document.getElementById("parentBatu1").style.backgroundColor="#C4C4C4";
                document.getElementById("parentKertas2").style.backgroundColor="#C4C4C4";
                const versus = document.getElementById("vs");
                versus.classList.add("d-none")
                console.log("com win");
                console.log("player 1 choose : " + pilihanPemain);
                console.log("and com choose : " + komputer);
                return "com <br> win";
            }
        }
        // cek kertas 
        if(pilihanPemain === "kertas") {
            if(komputer === "gunting") {
                document.getElementById("parentKertas1").style.backgroundColor="#C4C4C4";
                document.getElementById("parentGunting2").style.backgroundColor="#C4C4C4";
                const versus = document.getElementById("vs");
                versus.classList.add("d-none")
                console.log("com win");
                console.log("player 1 choose : " + pilihanPemain);
                console.log("and com choose : " + komputer);
                return "com <br> win";
            } else {
                document.getElementById("parentKertas1").style.backgroundColor="#C4C4C4";
                document.getElementById("parentBatu2").style.backgroundColor="#C4C4C4";
                const versus = document.getElementById("vs");
                versus.classList.add("d-none")
                console.log("player 1 win");
                console.log("player 1 choose : " + pilihanPemain);
                console.log("and com choose : " + komputer); 
                return "player 1 win";
            }
        }
        // cek gunting 
        if(pilihanPemain === "gunting") {
            if(komputer === "batu") {
                document.getElementById("parentGunting1").style.backgroundColor="#C4C4C4";
                document.getElementById("parentBatu2").style.backgroundColor="#C4C4C4";
                const versus = document.getElementById("vs");
                versus.classList.add("d-none")
                console.log("player 1 choose : " + pilihanPemain);
                console.log("and com choose : " + komputer);
                return "com <br> win";
            } else {
                document.getElementById("parentGunting1").style.backgroundColor="#C4C4C4";
                document.getElementById("parentKertas2").style.backgroundColor="#C4C4C4";
                const versus = document.getElementById("vs");
                versus.classList.add("d-none")
                console.log("player 1 win");
                console.log("player 1 choose : " + pilihanPemain);
                console.log("and com choose : " + komputer); 
                return "player 1 win";
            }
        }
    }
    hasilBackground(hasilBox) {
        if(hasilBox == "player 1 win") {
            document.getElementById("resultHighlight").style.backgroundColor = "#4C9654";
        } else if (hasilBox == "com <br> win") {
            document.getElementById("resultHighlight").style.backgroundColor = "#4C9654";
        } else {
            document.getElementById("resultHighlight").style.backgroundColor = "#035B0C";
        }
    }

    menampilkan(hasilUbahBg, isiTampilan, tulisanTampilan) {
        const theGame = document.getElementById(hasilUbahBg);
        theGame.style.visibility = isiTampilan;
        theGame.innerHTML = tulisanTampilan;
    }

    pilihanplayer(pemain) {
        const kom = this.pilihanKomputer();
        const tampilan = this.mainan(pemain, kom);
        this.hasilBackground(tampilan);
        this.menampilkan("resultHighlight", "visible", tampilan);
      }
}
function reset() {
        window.history.go(0);  
}
const main = new suitGame();