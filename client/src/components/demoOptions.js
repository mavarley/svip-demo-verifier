import React from 'react'
import "../stylesheets/common.css"
import {Container, Row, Col, Button, Jumbotron} from 'react-bootstrap'

class DemoOptions extends React.Component {
    handleChoice = (choice) => {
        console.log("choice is ", choice)
        this.props.onChoice(choice)
    }
    render() {
        const person1 = {
            firstname: "Miss",
            lastname: "Hello",
            feature: "Seamless Immigration",
            description: "Blah is a frequent international traveller. In order to speed processing through immigration check points," +
                "he applies for a digital passport from his governmental authority. With an electronic version of his passport, immigration " +
                "officials can quickly and easily evaluate his suitability as a visitor to their country!",
        };
        const person2 = {
            firstname: "Mr",
            lastname: "World",
            feature: "Speedy Air Travel",
            description: "Security for air travel is more and more rigorous, requiring more nad more time to validate each passenger." +
                "Mr Blah has a collection of verifiable credentials that are assembled into his air travel identity Profile. When Mr Blah needs to pass" +
                "through a security checkpoint, his identification can be immediately and automatically verified!"
        }
        return (
            <div>
                <Jumbotron className="lightJumbo">
                    <div className="container mt-5">
                        <h1 className="extraBig">Welcome!</h1>
                        <p className="lead">Verifiable credential provides an easy way for identifications </p>
                    </div>
                </Jumbotron>
                <Container>
                    <h3 className="font-weight-bold">Get started by choosing one of these models</h3>
                    <Row className="mt-5">
                        <Col className="option-txt" xs={6}>
                            <Button onClick={() => this.handleChoice(1)} variant="outline-light black-color" size="sm">
                                <img className="circle-img mt-3" src='data:image/png;base64,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' alt="Person 1"/>
                                <h4 className="mt-3">{person1.firstname} {person1.lastname}</h4>
                                <h5>{person1.feature}</h5>
                                <p>{person1.description}</p>
                            </Button>
                        </Col>
                        <Col className="option-txt" xs={6}>
                            <Button onClick={() => this.handleChoice(2)} variant="outline-light black-color" size="sm">
                                <img className="circle-img mt-3" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABXFBMVEUwrOK/ACDxyaXktpJWQDY8KiDrwJzuxqL///9YQTcwr+blt5MvsupLNy1UPjQ9KyHFAABEMSdJNSs9GgC+ABo9HQD4z6rttYoQq+f3yqE8KBw9HgAxoNA8IxHrvJc8JRY8JBJYOCbBABc0ibC8AA8wp9o3Z385S1U2cY65k3bcr401eZmLbVfyza3CAA44Yng6Q0kylcE7NjM0harUsJCsiG5hSj6BZFIzIhkqGRI5UV+Jy+z228Rgr9Svvb/47OP45dTBGCrrtZf01rvPZlrkoIfekXvTaV87My/No4M6REyWeWRvVkjAn4JKan1RUFJTSUVOXWcjEAkzBADJmnQgU2xoh5d6scuh1vGbucTTxLHQtp9yxOvJ3eRTsNqwtLHOw7OVY4Rlj7utSWDGNju0LkVVnMuxO1KgWnbLR0fZfm68JDa5JDl7eqOiT2yFdJnOVVGJaY5ymLyebYNYLgq2AAAPNElEQVR4nO2dh1fbSB7HXWWrI9uAcQOMTSihBzAsCQYCgUD29nIlu1d2LwkpS7Zk7/7/925m1GakkWRsrJH99H2b8AKyVh/96hSJRCJWrFixYsWKFStWrFixYsWKFStWrFixYsWKFStWrFixYsWKFSvWaEkQJClRq9Xa4KvA+mIeXoKUWFg83K5Uq/U5dXNjpzZmkEJi57A6WZ+tZJEqc9Xiox1hfBil9lJlcjZLanZSXR0TRqm2WK9nKapULxck1lc3uKTaRpHKhxiLG7oZURJqQyWk0TKs1N6YnPPig6pvtwFde2F1Y1OtF4vF6uXm4tboJCGhvVj05YPhWFlY3C7CJKRnoUqlXtzeGg3nFYTViqd/4tFYr7icd2cEEAVhR60G83mouBB1RxWkhe1Jp2nuo8lapBEFYWGz2BOfqhVkWYGSCxr+g9nN6BKCzLh6SdhPAwwZKMAhayoGl+F5PpMB/6E/GRmDnFyNJCJM/KA9q2J8qmxevylFKUBMFUoD9NgPedn6XKXCGsYtWNYWN4tke6bhbMAhcVDDnuAe2JCK9cnqUsSMCHLno6or8WuYgXT7aBYk/JFSQIyK8ygUiqyRCIHal3X11kCYydz20oUYZdtRzTjN1pciVBSl2ia1NhQc3idnKELs9k9sI861WXNZklY9aoPtfQ5nVLCI5DMqYW3r0/WNqBhRWipS+bKqddUayavsXd1giNDAGnksUlQ6G09A20kV0kWVPU5M72HppYDzYxUj244CorDgBWhftEYYVOFzXFpcwYPSdTt0RaOzqXmPHyw3JAya0Z5Mcel0YxdD1PA7gJ2h/og9ovSIUiR0WaElEwZVrqdSgDDdwPxUdlrcQnyZYMwobHn6qE2ISp5VBwtcChGKmBGhZ8rE4abmLhkPh31MaF+yiuMq+1MGYdr2Ut5lckuV4hLTmZuatwlttyNd9pVBmG48tjs41Q5EXnGch+mUnLDknWes1IGu2Eo0Wi5lEIrLtpvC2KOlGsOMi8wQpU3vga51+TL+L+VmyiJcsfMrXhHt1tQ24yErxLZ3FNrZnyS8tgjTDZ4gJG+JA5FVB+cdhjagnv1Nc8nLGOE+0cjYPus2Yra4ygRRWJj0AMRGvjxBWHiVsgkfE4TOkYgDkcnclLDjMWEo46PALEH4BCPcJRwTuysUxNlHLIzoQYiP2c3kL1MIsZqvkI5tDJhJI24xMKKwQCOUyWG83qKY0LCjoRBm8GNs3yaMyCKfClvuOCTmnqBU4rtKDiN0FMQC8TnZacYqizF/zWlDTXHOwyiECZW9KTohOszxUYcZqyymUAWVqPgqZSKGHN4rj3HCK+x4R67RjybMyMRNpUO85FMnmrJE5tFQojEI02n8wII7hB3jDJWFDVdtN9WUDEUyDC/rumXdhCYhVvIzzqpPMWOxFj5hom01NQXntSHxKjHde5NK4YTiFeGXkMbtB3YPV2UxM2WND6keCqcNcZfbT5GE6cY1/nMe0rhPZJmxziTVGG7q8tCC6ztKYXfKSQj8lCRSNNq9MqKxzmQpozbpsiAPlyPcyDecBWgTgt6UdG9eUZ2ftNak6ossCKXtCpnleR7YwQUoZ17ZfDhhurEsOw6mZSyEWN9g0nwv1kkeyOcElJXdFA6IE6YbK/tul3ZZscDMhqhxw6qY5o5KWd7NEXwkYVpsLPMeiQqTyoowkZjDnFRxpx0Kn4MQMIrXTld1SWaUS1FbQ4yBHD4rX7v5XITAjCuPgxhVNvUQTbcRE6NEXtX2OQqfm1Bn9A/HApueBgWieWGyA1BRXlH5aITBdpQrFVYzwxYhzHfYyr3C0w3oQYgY9+nNHzodk7EFlLRpEmqOmQjOg8+LEKVVajlEmmS1YCosztuE+LKnl4v6EMJp4j0PRP6SlZMKqzYhHoQ33oA+hGkxzdMR53eYEX5reSm+fUafVLs/IRhS0WNxntmqvvQng5DHfdSYkOmDMN24oRpxntkmKcmaZcLvvb4+0RehPUFFjo+/ZbYAZYYh0Vv6OmkAobWJQVMxt1e+Y7b+RCNUeD8T+hOm0yaXTDRI84wATUJyeCDvDkBoBiKvECPPeTZNW8LyUtJJvat9D4TmFJxCTBLPs1i4gJIMQGJIse9rwgBCez1DxdMzs4IooXrIE3mvcOULGES4YpyMV/FAnGe1MVrYgW4qE2Va8TdhUKax3FSLBGEiAS9HxZdkZN9iGExotTUFgpBd27YEjGgEjP63fzEMJrSyKUnIrG0TFuZBXjesp3PmBiQUl3UjEgWRXbUQVuvAS43AQYB+w4qeCE0jEjZUWAEmpMO5Am8EDppYNBYJByLUCwY+d678mVlfCpdJjVutO2tgoumBUM+mmhneCtMwRIv5RgCirw9BuIdOqBrhXYBLp4z4jHl9o71S0DKi/8ipN8IDDZ1OD29elVlWQ7Q2Y8zQ6JcU1LP1kEuvEGHB6LyBa/DfsdtkKlTtJVIFkfqP73siXD6At8p0fpBwmLXdQG2dUPcnfcI0YGTRQ8V/3NHQDLOeaMBJ2e0wtQj1i1HRV9lnIrE3Qr5TQNs49OcSs0qB2QZTqCq2VUFDRgwMxKC+dKWTVeC+Lz0Ms7Jc2Wa419vINHo2NXbCagFuGkQIwpC3NtXKGlxZY/iYl1Et9BtubN4KqheBo6eOIlslSNNY7aUxCa1HLpSMtS9fHmQWI93oFGTznmUKKrPdQqakl8aeGjVjrHJrQW1NwBj/qlOwKpCxmbbI8mFE24gF3rggjdf6ny8FtcK+Y+aeb5UhIDDihrm7TTYfJdAGmNUXV8wbZm+kZbMH2pawaW5RVIxtaJ3dPT8/DZjVP7CSs7mpjcneUpywna2YjqUbsbM39fhVn4SNm46Rm+0HhJiGIUKsqVa20a/q9ZMpn0j0XV1bObBSs7Vnj2XTZiJemoh66HR8x/l+hKAnNaLQ2s1eqbA2IURsb9ZNK6I7f+BXEf3WgFc6RhTa2/Wj8sjzoVE0VCXQiD6EjWudUOatHdDFqLx7QFo1XjugykFG9Nup0DGc3dobPBmZ5/ITUm3bGCtqAUb0JjSjULEAi9EBhK/HWDTerqCidHp/QvFKT6SyCViJjIsakra2rd37He+2xpOwsYdMqJmAs7ORe2mdICwVzQbnwHMh2IuwsXtgBzI04GEk3qrgkFR7ZL4IxDPZeBAaaUY1ykRk3zooSAuXVX8/9SA0fFTvZOpVto+p+0qQVmdR/T/waL/phI3rAzOGs/X6Euu3KfhLam+gcHxNn3WjEjaWX5v5ZbKy1I6mg2KCL70EjAdPaIjUHbRXeiWs1IsvR+TtrVLtEDLSttFSCMUVDeFNXi6Nzht4BWkLMKoURMo+75VCB1hP3Rihd3tCIcY5t6O6CMWVuWJ9c2lLGC0+KAH46l+unIhOwsZfXy4utEfs9bOWAOPfdmd8CaeflUeVzpDU/jvnR/imzPoKB5dQnvEknB4DPqDyTI5OKI4RYS7nIhTHy4a6LEJRHDsvxTSecZiKCUdcsFqMP2Fq/AktxjEmNBjHmhAxjjnh2PalY0v4/Tflcjnx5pk3ofjTm0RZSJS/+Z71tfaj8vf5/Dc//GNmhhwCO0fA0/989vRf+fzoIZbL7X/n82eOAT5lFgNSrgHC8kg5bLn8IzRe94jy8AV1RvjsaPrJs6ejAlkuP322Bl0zt9Z1A9JnhI/WoCnFn54mIg8JrKfjAQHfO3YbkUZ4nM/r355O//S0HOV5qXIbOqfJ0gchhHzyw48RNaQkvPkPkTdzR8drPXpp94xMr2+iNz0sSB/fnjoTJwhENyKFkOs6X8vTuHj7MVKMgvTu/cT6+gsnYT6fd7kphRAcRhKf37bWJ96/iwwj4Psw0Uwmk63b3AMQityLZgmcrTnxIRqMiA9eEVDphJzfPjs+cy3nB3mpmL5tJY3TTfwSAUbp4yeTDyGSODPdvLPqcyIugHSW705jgKcn9ukA46ePjPfPJj4j/7Qv6Wdyrcntpy4bgkNEG3ClVMLPB3z1M8tFfeldcj1JqnWHI+aO88czOV/CaXAI5qInJccJwf/hHbvnKz9PuK4nOXFKJJuzXLfrR9jtpnNYRN66Twhc9TMbKwrtDxPuy0mWbgk/zR3l812PlRkImM8fYYB3LcoZwV37xMJThfYX+uW0zgmbnQHCGcrKjC7Av4ZlGYoF9XN+YbEF7EvT43IcRjw7AtFoZ1SMEMCnz2zANPfcizDZ/CV0PumTM8d4GREwgnTJmWa0CUGOwQwI04wnIMg370NON8KvtBjUVfrq3J1wnO8CyrUUpDQIOfDvMyyLQsILL6+Amvg1XD+VfvG53yUHYCqX4oC9umv5Y2DQMzha4kAAEngQ+qvPOUEzES7hR28Tut0UCgwWU5ASkB2dQTrSQ6EaJz7nBEZ8Fyain5OC2/2Cstsrl4OFYw2Uhy5HlAjbS/1MCJLN5zAjUfrNL2ScrZsFCUeLoMSD4QMNME2vPrYRw7Sh5JlIdfk8b9GgwOmEp0GEIbqp4BuGeqq57z5v0HQHEDZ/C89Nhd/9bVg6P7+4uDg/b6Smeti5Z4jj/OMQnDY0wIT03i8MgVqtVhP8aSV/vjt3WJMj4DiOOz2/uLt7/vX51xcnAYRhumnQ3bZve6nV/EpAWoQiJ57efb0tNVvNkq6gk7VCy6ZBYeikbJ3c2VtpOdN6589PWs2ebxU6UTI0wj8CUqlLzfUXJqP+W8nEu5PWveiQJj6G5KaBYUhjLN1Zv8FD5C5O7n8GoPXfQyIU7mtCpNbtqf5bycT0zwF1wUvNT+G4qfDuXmFoqdS6gL//kDYX06vWQwEMrIbeaoGGlRNpczE9KqR60U8Y2oi5531/GtjwbShuKvR/hcnWHddnDCKVPoRBeM9q6FDTd5gbqPUwnl0Xfu03DJEGAgwnEP3HhkPW+h9hEPaf7AdXM4wpt9ogYTiwSsO3Yb/1/oEUQmsqvR0o0QxMOPxpU+kTw0QTSs3vr+1+MA2/5jMOQ4A47Jrff9v9QBp6qmFa7xHhsFON9IVhvYda/9+QA5FtvU8Ov6thnmgA4pAJ7z3N9uCa+HGohAOM7x+McLgDKIk54LCnFAca3z+Mhju3H4FEM+S+jfHAQicc6pYFxgMLXRNDfesuyxkMi/C/wzPiYBOJD6Vhdqb+m0zC0jA70ygkmuHuWIhAR5OEO1iHSBgFJwWBODzCSCSa+/be/weMv+Um2g9lWAAAAABJRU5ErkJggg==' alt="Person 1"/>
                                <h4 className="mt-3">{person2.firstname} {person2.lastname}</h4>
                                <h5>{person2.feature}</h5>
                                <p>{person2.description}</p>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default DemoOptions