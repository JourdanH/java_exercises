function nickName(nickName, fullName){
    let matches = false
    if (nickName.length < fullName.length){
        for (char of nickName) {
            const pattern = new RegExp(`[${fullName}]`, 'i')
            matches = pattern.test(char)
            if (!matches) return false
        }
        return true

    }
}

module.exports = nickName