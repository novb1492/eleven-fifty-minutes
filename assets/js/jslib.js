
/**
 * 영화 정보 선택시 url 변경해주는 함수
 * @param {this.$router} router 
 * @param {int} moveId 
 * @param {int} locationId 
 * @param {string-string-string} date 
 */
export function ticketPagechangeRouter(router, moveId, locationId, date,result) {
    if(result.flag){
        router.push(`/ticketPage?moveId=${moveId}&locationId=${locationId}&date=${date}`);
    }
}
/**
 * api 조회후 리렌더링 하는 함수
 * @param {this} thiz 
 * @param {arr} moveArr 
 * @param {arr} theaterArr 
 * @param {arr} dateArr 
 */
export function setTiketPage(thiz, moveArr, theaterArr, dateArr) {
    thiz.changeMoveArr(moveArr);
    thiz.changeTheaterArr(theaterArr);
    thiz.changeLocationArr(theaterArr[0].local);
    thiz.changeDayArr(dateArr);
}