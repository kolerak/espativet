import Image from 'next/image'
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div
      key="1"
      className="w-full h-full flex items-center justify-center bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat"
    >
      <Card className="mx-auto p-15 bg-white m-5">
        <CardHeader>
          <div className="flex flex-col items-center space-y-4">
            <img
              alt="Logo"
              className="w-24 h-24"
              height="100"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA0lBMVEX///8AAACAAAB+AACCAAB2AAB7AAB1AACIIRxyAAAGBgAEBACGGRMLCwX8/PwUFBHy8vLKysrx8fEtLSvl1tWIIR3c3Nzw5+f17e2ECwDV1dXj4+OFFxDezMsfHx3Turm8k5KwfnyWSUbNsK93d3alpaStra1/f3+7kpGfXFqrdHJTU1Lr4eC/v7/GpaSUlJNeXl08PDsoKCbSuLfJqaioqKhra2qLKyY3NzWQOjaWRkSlZ2aJiYi1hoTZxMSmameNMi9ISEdWVlW/rayWWFeZUVDVCKljAAAZmUlEQVR4nO1dC1uqXLBeXEWDBRUGFCRIlhDRRXeGhto+x///l87MQkvNTN27jX2n93nykoIwzOWdWbMWhPzgBz/4wQ9+8IMf/OAHP/jBD37wgx/sEejR6eHlZat1e3vbav26PDw9M8o+pBJxdPjr6u6pxnHcATcDe3V8fdG6OSv78P416Enr8RwEgCI4f/n9eHH1DHry/HzxePfyUOPYJ9rd7eH/G5U5ugR51A44/f6qdXNi0OXP6dlh6/nlnONqnP679f9AX85aL1xN484vLk/eCWPpmzdXT/jVp9vTf3No5cC4fOG0A+3u1+LFp4ZtJaZpJom9pDVMpVAsR//yMP8hTi7Oa5p2d/PmJAwzbI/6Ci9JlQKSxLtZlHc9+/U79PBCx80OyzjkL8bNNVzwl8uZQKiZDpRKle+P2t2GZ1o2wkq8RujHE6dSFSPfexXezR0qy2VJR/5VuHmqafrVyfRdkk7kijJK59RhEYbZDcaSlPnm9B9Htw817bz1iQv6Tri5B4m0pj7BbPcqYtywPt3KGOb1qhN4xTt6+XQAUvnCo/yXOAXH+vCreG37vWrv9ep/DivtS2KeFG9u7mFHN19whP8aRxecPru8XiS5sxPcGHY6rmSN4vXNk3ZwfbL++/uPS03nngtn2elVJ8OddmLGFTEtfEkL9/et3crZi8b9LshIyEvBtiryBsPnJZ+JgqLefePADBdVL+y/48r5R0FmM9BUlH326vRJ566+qaoYdxr3yMzGzKQ/lAiCprLTYa9uOf3pW3qVQ32qJPaoGv25RBA0l/rM/k6Pde7XX9nlPwVcyxfGSDqC4v21vSZNqY3P4FVqj39tr/8Ijxr3jM/GpOL/1R135DpTlUuQ+bcqrxzd6xyzm46Q7R5sVsMYVH18PjnX9W9URTg71s+ZDwwq+RfsvitPUEPoi659m6B8qutP6Erssfz3PMk8rJ7A0gMw0G+SLJ8e6Hf47An9LysFxZUuPj3XvodQDrlCJGEl/sJfSavMKp857hukyqecfoHP7Ur6pb8zlCN8anH7rymnms54QyB1vviXTKGJT7d7L5QjvRBJLH2Nd52H7WSY9dwecHsdfYwn/RqfB9LmZSOGnN+BxtjqGIVypdX2mae86C94lLG8pUgSqevic2e77Ywe05QLXdtfRnul6xh9g8qWIiGjlEwClKW8XQ3A4JlPgUux5Q/+M4C7QyX2t/Yltgw8rOr5vDFpbLelJQ7g0TjW9zQhPOVYjhNWt444XWQyuQsW52/LaRIJ9Iuccdpelg7oAyMmZpHMb4UJI6UKEI6E33bbYSUkmCVz+zjYfseM2hZ3YK9VNtjTQGcibB3D0ypucqEf71858pI7wCvVH2+/6Uw5+hOLjLZPpEc8Rp0n/Wr7X/5aGPoBWrQvfz6+9w6NfvGcyEJV4Lcf7hgjywdvtm/U7ZolfsPqLgM4/mD6Im/ajViabEvfLFbQv9XO98t6bjhkJpTfKRWOg+kLikM4NJWDLU8uraAY7/XnXX79q0AfNEzZ4/pOV6o/WtpbLGxJ+gYZYdazT7HnSr8naDnb8lcGQ+4v/6tT3Y67GTISgIt9orNnHIflV2e3IpInvk+PEiHaSr5dCayH6gf703XwyKi1z++WieV++H5D6gv8IM+D2N8skDUn8PBLe9rpCL4AJ8yQrcqWucoM7gdxxvODqCfzm0X3hEW8Y21f6ku/GV2Kst22tsV1nyYTYbMaZqwSDH97Eo/B38OBmNUdK2uWuv7zzN9oN4aESdO9th8l6zvGCyaTHTe33PWfZ+Fm+/FR325q5zsexl/FGXdwhOnwrmOg1lrbIba0YbZAeTSy49o+hJ4rFnT60a7bU3ltI0awsf75AsXQc7/rgfw9HLGgY+5G1xjEdZt25I31z5DQyh72IBVsaZj8xePd9zD+OIYnWw0A5HgQt1r5Zch7NGDjTwbLo9VO1GgEohRv0+BkowDPuNKL+BCICVLYP9jFYAUBsf1MUoLhlmcXoe95KZ233WrI10T/D3YxeL9xpzpo7NACN5Rgo8ta2ZmgjsMXXmWH6tormu/0xNh1ZFVMMRPkyu2JPOQw6wp2pPUF1Dd/EoNs4VJ74x13xQ7komQue6Uhh+U3pJorYb+xvU6mEKOSkWRXGSc4AnBTsvE8oemY1T/x9OmbAPpWPBpGownZrS0foKLxcFyZU+XOOB24Y9Bc/y0ritIPmRcVXumJ3QOCXh+Q3u4NToyiXJdaWrpkjbvOZ9l8LKvS+H9Wfxa9CTRPDTMWR8Su7KwnHkaeVq3MoZ6LWguHbD+l36HsdeX+qujarr/aHXUduT7mRxBThV2rIFQOkTMd77j538A5hr1wfWLLEMqUjlZE2FR4c0VdKQRRtNFwJsG7b24ItqV2UF40PuGwWjHYJCWO4FT9d4liZ76wWOSCFhri7l6bVVEeS2xxK9yJuElx0MKzTJdqIcN5kaTzozxZd8dDSirMoVzsuPmf4wqbU43qRtk8m9IXLxCPZEFvFtLIzq7lGIqNCYdceQzlGmsV3mb9VgFrS3Hn+nWshWGdtjP/7e37UGbo+3CZWGJaDjQsJ6XvRvFWwmduc/hWkLbl+bpJvNj4SCu7OpQcNey4tFHSMzZyMNqMYRV6QpRXRVHnEwJzWS+qu84M66K+vZTG2k6Z2dY3G3/JCh6Wzsqri0MU5nI9rblrkcpDZ351UFYaeMM9IkvaiHTalcLrJNXi/WCw+HmwVKnbutlvBgsbUVtcWW0X7JetzQYxohkLc5hC5O8y33Z1oTfQknY1HmxJYFerFDxzt1hP2uTg374Voaml8nsXavbleVKSrxrDsDYIcTjMU14wZnRxKG3yVeX1dPMA+zdX6tZwof+6P1mWm9mrbtCWn7WRYJc1ysPoSWcTmTR6ry/TMTD3D0Yv+gs+ZbLkqXw5tKJPyhKksNIz7qGksfQXLCj5nwz3MsxRNds0hI8yPH4x+HSLCaJTBE04zcnnMhlhjlDagMY9ZsWsivMJvAVdGn94XstDwwn/1i2bAzWkow2aUWLkkGwMuwwwtrjJeG4wH1ijD9uZDGn5E0OcqdQQ8t1EzDbw5+wiPZRVfjzGHw4Gn3/RnfMT6cfjFIn0zgnYQsF2DWkIH2/EWXyFoAqXIxPKLkY8+vSL9ty5mpL/bj+zF578fttp7uxDnuRs1naeYkp1XZZMzjeUybD+to0670yolzflarXCD5juhPXlLQEpy4Tq/nx9fy3KlcnxhjJJ34ohuTDnEULJHfnDxKBJl4/oXC60ABwmxNFxdcMWQmY7L+X5E/Sxn1d//NfYay7041tzLrUJbqm9clcmeF5TNoxNZze0kQs9lSWTJ4zFweflk+DVEYw/VCoqmx/oCWnmIBNKN5UJGx/VypLJPXK29qsT+PCYX2WybowiTiHvW/nxUAbbsUl9ff79Svdi1LbSONsLcvuuQDrFqYw+CrKvtrOmI4n4/wvUZXVkURoYzfO1jiuZli59Mgqw+KiXJJM7nBMJOWBenPNA+CBB604pzHBdGoAFE1teKRTw0XFArMqarW232Heokn6O+U5ZTeasbO9VaFdi178tuqtp5nBcPK9ovnkD6+AypVVFO6vKqMs6LRs7zD8nwoQoKVYAy8qLb7F+kkiWKbCZjaag9lb6FHvKxda2MBYjXo1ZyuOFHe/Vu/QaRGyQzofenPZdEUVqOfCE3Y833N2W5/K3cMldIOs2iaKyjHbiqqvnExS1Nau6Zl/mVG7s3EhDFrKMn65RB046wJhkrChEMRhjV0VSYtdVwaDY437JlTWKfsjhgg1il6SiInTwMqmKuGrC9YiVFU1lzb5maeIEPYrJ5gwTz80KVWlkIHpKlNWRx1RdBRXVFFUnAApkTzW4FJyw8Xs8i7GqCDnm9nB0K4ojDTbKvq4jy5gNCbK5gZOZV5mWSzBIg21FK0cIUkFRsfrUhWeekg4Owd0dlDVgTLkaMKM2MC1bAQ3JEmJNeMXpvYvJtML8zZqxPX9WiAtQJuOZBdJi2T6clC16b6KaQ9IXFXFsEjviFQUrkz56HcacygH76RBNwlIdMOYYLlOP5/nBsqtlCQD9uFmAyjOTa6PtNJe90sSzYWP3XeAxAt4RcQy/zbt1lQ2HIMcxdK60aTyPSFASdqp0JKiKK+Q28Ua8II8Wz6owjd6Hizv4r2Q49+EhWP5i3AAmZi93nFq5LAhRg1Cfd0BJ+uxjHGg8K7Ep5/YA3XvBTsgwA2/i8JFH6DBQpH44f6naDi2sbCXmWtNjtI9wORlsD+oUq9tzoMNIEkYNyA9jkIgqqsXIgI1DApe1skLxbBilPyOfjUgWXZd3gyEusO0PgvDtwipIU6sfpES5HI2C3MezGuDDu26wMDMWmjGsTjDIsdPaa/d4wRXl5mzwuYNs97m0sEPIUQ3ttg0OxSq0wg7jjBcEQcryIZ6/9SoEG8nGR0bup6mfxyysjJnZDFbUj0ZvWmYlsCfb85syGI/QG0xl7yXTDPC+zPkqrOtyiJOSJmI87ZA3zEbajqNM6TVjPxwmU0Ek8ufVVLudCw1ipMFAftenlL92vllemAaTsTKejHK/Y05/tRErEImJ4rOpGSXOlLytPaM3AIdCx6Io9GK/YS7mPIZlDguSbjfVT0bbLWES5NQS1CAYLAnQGPDFfpOhuTRAaifDNB4LoiNa2LoFzvzmoDx3gg4Fc60JngCNeAg8jiiIvNLrT6Jo0hyrfEUcpKjY7DQgTufDBG8DYczBNth9IYyiDxBsZNHBUmpYXi5hbZKgphjDdl/m3XETf6I/ViD0i44LdG2MvxOirrAO1dJAdSw/dgT2ZtgXRFdVFUV1BUcEt9IrnKzh+dGQ4EkTMx9LeKcQBlmaQxUkEbl1RakLqurCbvARuAfEdakiDzCUJ8T28yGqCzXTWBEEFAb+nOo6fK8wNibWh3InZtzVgEQbs7FvKwyirNcbNyMwosIPpqOejIvIdn14x9TftqzijiGLwG+HQ6+AyZAkSfFdkAIItwNZUxJVe3HXZIzIDPPRJKsr2SSeta5THDw64R7KEcYUv9hswMn7Ehg1G+0IFFvk+QA4BBZiTR8/2L7+RdFsPBNnk4HjskaywPO9AXiu97sKUWNvtfI6QRFHrMgXstZHGg3ytu+381GUqWjloNS84NvEjHDZVJaIkO4ONUGW5vgNXE4KO8DsnBfRroCYZNEggJ/081HRuN5H07kve3WLO421yDJWQYGzOQDmVBTV4Z3Yw9WSBDklVpOtF5MyboUPWFc3jFWcBf+DZ4gGyUKWyWqXA7DABi/0kAl1metirsSFHxQFlVlvgqZzyuaKlIkbNsc5mvKpMIOYCEcJFqNO8PYpSdsVxV5CfEFFBSnymihB34Fv0QEvWZMBjKyQWoIPjCMXzW9NTLz7oiji7WesdFBHXUSJ8PV2IQU2VfNCK3sJoSLymK/pWRL6eQ5UDd8nfiY4jtwmQ0iW8R851sAoa23DZpIUzAFMC3QMiQtKAD7uEgqf2/gdXBamg4ZjVzAU0x5y4ZR3IMrkqBe2V/zY6zAG63LnyqsTzFBclmy5kmQ3AkdwVEcIbLMPySGIxOgLMRYKkUIM8qJXmgKJh3CCbgDpfMCEhAtvTTwkYLAVC7JdQcV1cGBHIaFtUQS75EfhcvbUwOLkzR5Mzj9lczPCudYRw+zGY3CD4GHVtuVNeNXp2dhC7bqUJHWsUuZw9NT1WXcbhCOjjtUVOOtBQhopSQfThCHqUVBBTLv7Lrbu0aYo1ruUdsc87B1sZrBw+6seXpjf+7DaxwtbfpL3p29pW67KPJItJffsNAN2yw8orqWlyEPi8bj2YYpGgD1H2FaSN8gwQyGA8QQpMfvExPxZnGBHfhOXGQ0xW1L4iYVZD0S0wCRJXpfBs/ByRQ5mUmGdg6ccV/Y0dILTNJEi+fybs7eGYQi5md2JBEdRcHwBvICriD7xZbWHa/azhwHqCyWySWIM1XzAGrQoCMRhcgObCgSgtxmELTIUFFXIKRnWHcXlnWBIbbMTQor5diBNTArutPLKBHM4Z0uO8PPFUpo08owXVQzIMSVhT1TqoCAxmFECp8cPiSkIJiR9I9IBq8O2tYmbYROTQZjoTGLwmCKLsJXl8kxmdcVxscwI7kQBw8mCrjnvUUxUk7Ny54y+osW8WjrvUWJZEphqZ75B0jqv1hWgs5mjgCAagjshVHXBLCJhSCYiMcGUKOiRDV6yQZoKeF+QT+DwCegXCMUUxKYN4RxIj+i0DdJtonGKgiRHc2rCehau9mRxXXrO1tJdbK2yvLDbMSlWBkUkcELqOaoCMhgKqmOQzOU94gkCOIoIzjYEMSgifMgPSCx7pMmHxBZUkFLkijn4GhdUKxRUBXRFgISSLNsN9ulabDGWPblX0S8NS8Lhuw55rMsKLkpEzEyfhycTTgwFM3BAV0gGp5uDHvRAGqmjgFBNXjRSPiIdHuSWO+qY2jxoGLhmtB8LQhjuDfhx450jVTHoPO6JmpDZsmjNxcJHmslAUDCRF7IO8E/FGVs4MAWCiEVFhHMWBcvgndTkIe42kamDExHDoQgGpgggsx4a2BAUKCZJz3FU0KOJjOUI8FJSb5ER+Zj9ne6JN0FcashREmlh/IU2/EE/y5qYyIe8quIAYZtXnBGKBEiKx4Ni5I7owR+l6CwEi/TcyIa0gDRw1MYUFKfJxAjSjgWXj2xihXEzy/pRHi5oZcLWDbrep3V1n9hyZMEHA32g84LQNHGCmwK0IwAtCcCpqiKzDFpXx8QTFXCyIZnAPzMVFAUeEhSHMyE5CHJCiZfxDp9/kN41kQXf7AU3meGU+TaqrGqkN4KK7ADNIizuBGQgojGAlxW7JHbd2ES98B0XX5PAFcPUUZuoI6KFY8EQovERk4NhJAuyv0oqocyWwNyvxcsv2D0hVk24sH2/y5I0U3EdvkMnDjpNMnLAV3igJmbguiNwJ6LnqnWC8qCgTV0IxXjnBxRHz+oIoFSYJ9qd9mDwvkXMQlZHnvdpqVSAoWEREqznQ+VNZVHIiVV3XUx4Ci9bV9U+SMBJCUQjMlb4xBPrQpKD2CBcq9hq4YFvFT1jJDuv3SjvkaHlnOxBQryImxqbvpp90C17NFFGSPHh1HAprZGoAFVt4yMEYdEbimoGduOkVFbcGMQEqmOLrptBqpgLDgjTaPcq/Q+GEdusEflhnxxsgUemuZa0unWR1VTticTjPUfBfgTXZC4jx9YVmYIvCUiIgkGuSht8ne8QOxNdvO+d1a5LYxNp4OrGygZrRL7S92bt2FcYOsu+wjUrl3dDE0Vj9UR5BAqgov8El8LsB2itBbmvmbtoSgMHPSxkwWKxYkzSST80SktGz364d5aDOCxul9H+bB5pKvXbaAQDwe0ZEHzBoYZA/+E/ExWikIDcjTQdFX2EkTal0frqKu1h3fOsth/58DJuddaoG4lrSYJhFueY8s7YQDVR6qSHgQZvFKcIFIWU4l6cIrDTZH1PeVPB/d3rZQ6HrkFxGxw63mRSiSfLMc7vcxWh0RDdom8tEJ0cLEjB/l9fkDeZ4B6zRuUrvay+6c8wvQ2O4Xw+LSGR2LrkkMzwMXWd2QJCE8h1ujJTFGLFGyyrFLA5/S1O20NnUuCEY1ZtyZ/OX+kWBjEW5TaJ5Oj1IgeyA6mzWJif0f1soMZnYjvc61u/XRZHt4FQGLqTdkLaC21u3iQidvrBZIRltFmQOz3Q9o6ZzKNVBJ9kQ6EglsOUtbFnyFlJ/0zXyx0f/hRXWg37piyx/+UDlAEznLOH4vZ7+4wrjTWT2U7viyNBxBqRj8716/1Y0n4dLjQNzYf2t705ylawxw4aHWjJy/6LBIVS3OM6+sJbjppiD6uM4Eu+hUiYUNj4pF/deTm+T5BWWRfQobb/vmSGW65Yu2f49++GjqCjYjrYJbcHa5RvDCCWd6w6kEl/stzuaphOMSfsmTvY8yC8iENdP2ZLpKXVya4LI60GDaox6xT7rX2HW1zP4+xYLwi3mW2Uy22KoeuwLOj0XN+DGx5sCfpY4y5YTEir2d+KylZUKAkYp36/Tzc02xStA/2Bpav2oPpultMuMPKpdI9eNO5buZI3nDzp0/mbZlbZ6i4Pq0B92SmGSlqaru/DHWV2wzOnHxdH3+hV4j+Jy0Zbnna4nFzXuLu9GRbeAaf3GndXGH4jq052XcQxiStqIRHjitPP97hashFuNZ17LtJBL6rU0+1NiIb9ajZNE1q6zl3saZlxCxw9cjp3W2QlVlusTsJtxEIbI0kOpnHr8lzjXvak6eYPcXrNadrt9Op6I0Hqf3wLgAVYYSTLUWOa5V0+aNrT9/Wtyzh8AalcTQkFHQZihR+k5tqMNgnjniSPOlNRGrfnmvbw3R3JIg5/gwVd38zEkHRHTlUaj9KGaS+KhrK5bH2pKkTpK9U7fOQ07v6/JRHE6YWm1fSrN0JuD/3RmK9IstjrR4NRHA+i5tjBaV29qN14s66T2weQyN23Y/Ib4aj1BCd3fHU4pxnUNoeh3w5iBM4xbizOgTy9vedAlLffkchviNPnYxALd9c63aA8dnIJOZPGnV/8N1VkDnDla7Uad379fHnykWDo2c3t3Tl3UAOtuvkexcU/xdnlBZzwAcdxT3cXt5c3pydnZ0eAs5PTm8vW1R2QX5SH9tj6b5CRTYGa8FTjEAfcOzz8fr78D7uQdTBOblrPF9cvT8cFnu6vH59bN6ffOcX7wQ9+8IMf/OAHP/jBD37wg/3F/wG03HQ4mTOO5AAAAABJRU5ErkJggg=="
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <CardTitle className="text-2xl">Espati Veteriner Kliniği</CardTitle>
            <p className="text-center text-lg text-green-500">7/24 Açık</p>
            <p className="text-center text-sm text-gray-500 mb-[-15]">
              Uzman ekibimiz her zaman yanınızda ve artık bütün platformlarda!
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex flex-row space-x-1 text-center">
            <MapPinIcon className="" />
            <Link href="https://maps.app.goo.gl/3Nj8WQYLwQbA3MVJ9">
            <p className="text-sm text-gray-500">Şirintepe Mah. Paşasoylu Sk. No:11/B Tepebaşı/Eskişehir</p>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <PhoneIcon className="w-4 h-4" />
            <a href={`tel:0543 156 95 26`}>
            <p className="text-sm text-gray-500">0543 156 95 26</p>
            </a>
          </div>

          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex justify-center space-x-4">
              <Link className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center" href="https://www.facebook.com/profile.php?id=61552590453623">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link className="bg-blue-400 text-white rounded-full h-12 w-12 flex items-center justify-center" href="https://twitter.com/espativet">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center" href="https://www.instagram.com/espativet/">
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link className="bg-red-500 text-white rounded-full h-12 w-12 flex items-center justify-center" href="https://youtube.com/@espati6342?si=srI5zXC7LS179_h6">
                <YoutubeIcon className="w-6 h-6" />
              </Link>
              <Link
                className="bg-purple-500 text-white rounded-full h-12 w-12 flex items-center justify-center"
                href="https://maps.app.goo.gl/3Nj8WQYLwQbA3MVJ9#"
              >
                <TwitchIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Sıkça Sorulan Sorular</h2>
            <div>
              <h3 className="font-semibold text-gray-700">Şuan açık mısınız?</h3>
              <p className="text-sm text-gray-500">Evet 7/24 açığız.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Kısırlaştırma ücretleri nelerdir?</h3>
              <p className="text-sm text-gray-500">Çok yakında bütün ücretlerimizi burada görebileceksiniz.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Acil bir durum var!</h3>
              <p className="text-sm text-gray-500">Bize 7/24 ulaşabilirsiniz.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-gray-500 text-white rounded-full py-2 px-4 mt-4 disabled" disabled>Fiyat Listesi</button>
            <button className="bg-blue-500 ml-5 text-white rounded-full py-2 px-4 mt-4">Bize Ulaşın</button>

          </div>
        </CardContent>
      </Card>
    </div>
      )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function TwitchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Google Maps" role="img" viewBox="0 0 512 512" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect width="512" height="512" rx="15%" fill="#ffffff"></rect> <clipPath id="a"> <path d="M375 136a133 133 0 00-79-66 136 136 0 00-40-6 133 133 0 00-103 48 133 133 0 00-31 86c0 38 13 64 13 64 15 32 42 61 61 86a399 399 0 0130 45 222 222 0 0117 42c3 10 6 13 13 13s11-5 13-13a228 228 0 0116-41 472 472 0 0145-63c5-6 32-39 45-64 0 0 15-29 15-68 0-37-15-63-15-63z"></path> </clipPath> <g stroke-width="130" clip-path="url(#a)"> <path stroke="#fbbc04" d="M104 379l152-181"></path> <path stroke="#4285f4" d="M256 198L378 53"></path> <path stroke="#34a853" d="M189 459l243-290"></path> <path stroke="#1a73e8" d="M255 120l-79-67"></path> <path stroke="#ea4335" d="M76 232l91-109"></path> </g> <circle cx="256" cy="198" r="51" fill="#ffffff"></circle> </g></svg>
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
