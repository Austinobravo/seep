
const handleIdScroll = (id:string) => {
    const desktopNavHeight = document.getElementById("desktopNav")?.offsetHeight || 0
    const mobileNavHeight = document.getElementById("mobileNav")?.offsetHeight || 0
    const navHeight = desktopNavHeight + mobileNavHeight //Total height because both height will not appear at once

    if(id){
        const sectionId = document.getElementById(`${id}`)
        if (sectionId){
            const sectionPosition = sectionId?.offsetTop - navHeight
            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth"
            })
        }

    }else{
        console.log("ID can not be reached", id)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

 
}

export default handleIdScroll
