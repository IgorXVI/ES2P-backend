/* eslint-disable no-undef */
const arrByDay = require("./arrByDay")

describe("arr by day tests", () => {
    it("should determine day", () => {
        const result = arrByDay({
            arrByDate: ({
                determineDate
            }) => date => determineDate(date)
        })

        expect(result("2020-04-08 20:55:22")).toEqual("2020-04-08")
    })
}) 