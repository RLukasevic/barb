import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './itemDetails.module.css';
import BuyBar from '../UI/BuyBar/BuyBar';
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = props => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Pagal vidutinio suaugusio žmogaus rekomenduojamas maistinių medžiagų paros normos koeficientus (8400 kj/2000 kcal)
        </Tooltip>
      );

    let { id } = useParams();

    return (


        <Container >
            <Row className="show-grid" >
                <Col className={styles.wholeWrap} >
                    <Row className={styles.favIcon} >
                        <FontAwesomeIcon 
                        onClick={!props.fav ? () => props.favClick(id , 'ADD') : () => props.favClick(id , 'DEL') }
                        className={props.fav ? styles.favButtonActive : styles.favButtonNotActive} icon={fasHeart} size='2x'
                        />
                    </Row>

                    <Row className={styles.imgParamContainer}>
                        <Col className={styles.imageCol} xl={6} >
                            <img src={props.items[id].imgBig} />
                        </Col>
                        <Col xl={6} >
                            <Row className={styles.nameRow}>
                                <Col>
                                    <Row>
                                        <label>{props.items[id].name}</label>
                                    </Row>
                                    <Row>
                                        <hr className={styles.hrSolid}/>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className={styles.pricesContainer}>
                                <Col className={styles.priceCol} xl={1}>
                                    <Row className={styles.priceActualRow}>
                                        <label style={{'marginBottom': '0'}}>{props.items[id].actualPrice}</label>
                                    </Row>
                                    <Row className={styles.pricePerRow}>
                                        <label style={{'marginBottom': '0'}}>{props.items[id].pricePer}</label>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <BuyBar mode={'normal'} />
                            </Row>
                            <Row className={styles.paramRowContainer}>
                                <Col>
                                    <Row className={styles.paramRow}>
                                        <label className={styles.paramRowLeft}>Kilmes Salis: </label>
                                        <label className={styles.paramRowRight}>{props.items[id].params.kilmesSalis}</label>
                                    </Row>
                                    <Row className={styles.paramRow}>
                                        <label className={styles.paramRowLeft}>Prekes Zenklas: </label>
                                        <label className={styles.paramRowRight}>{props.items[id].params.pZenklas}</label>
                                    </Row>
                                    <Row className={styles.paramRow}>
                                        <label className={styles.paramRowLeft}>Tiekejo kontaktai: </label>
                                        <label className={styles.paramRowRight}>{props.items[id].params.tiekejoKontaktai}</label>
                                    </Row>
                                    <Row className={styles.paramRow}>
                                        <label className={styles.paramRowLeft}>Tiekejas: </label>
                                        <img className={styles.paramRowImg} src={props.items[id].params.tiekejas} />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className={styles.wavyLine}>
                        <hr className={styles.wavyLineHr}/>
                    </Row>

                    {props.items[id].params.description.aprasymas ? 
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>Aprašymas</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.aprasymas}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {props.items[id].params.description.sudedamosiosDalys ? 
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>SUDEDAMOSIOS DALYS</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.sudedamosiosDalys}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {props.items[id].params.description.maistoPriedai ? 
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>MAISTO PRIEDAI</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.maistoPriedai}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {props.items[id].params.description.alergenai ?
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>ALERGENAI</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.alergenai}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {props.items[id].params.description.naudojimoInstrukcija ? 
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>NAUDOJIMO INSTRUKCIJA</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.naudojimoInstrukcija}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {props.items[id].params.description.laikymoSalygos ? 
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>LAIKYMO SALYGOS</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.laikymoSalygos}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {props.items[id].params.description.pakuote ? 
                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitle} >
                                <label>PAKUOTE</label>
                            </Row>
                            <Row className={styles.descItemRowContent} >
                                <label>{props.items[id].params.description.pakuote}</label>
                            </Row>
                        </Col>
                    </Row> : null}

                    {/* STATS */}
                    {props.items[id].params.maistineVerte ? 
                    (<Row>
                        <Row className={styles.descStatsRowTitle} >MAISTINĖ VERTĖ (100 g/ml)</Row>
                        <Row className={styles.descMaistineVerteContainer} >
                            <Col xl={12}>
                                <table className={styles.table + ' table table-striped table-condensed'} style={{'marginBottom': '0'}}>
                                    <tbody>
                                        <tr>
                                            <td className={styles.td} >Energinė vertė</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.energineVerte}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td} >Riebalai</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.riebalai}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td} >Sočiosios riebalų rūgštys</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.socRiebRug}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td} >Angliavandeniai</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.angliavandeniai}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td} >Cukrūs</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.cukrus}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td} >Baltymai</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.baltymai}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td} >Druska</td>
                                            <td className={styles.tdRight} >{props.items[id].params.maistineVerte.druska}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
        
                        <Row className={styles.descStatsRowTitle} >Rekomenduojama paros norma</Row>
                        <Row className={styles.descRekParosNormaContainer} >
                        <Col xl={12}>
                        <Row >
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                                <Col className={styles.descRekParosNormaColContainer} >
                                    <Row className={styles.name} >Energine Verte</Row>
                                    <Row>
                                        <span className={styles.valueEnerg}>
                                            {props.items[id].params.rekParosNorma.energineVerte.kcal}
                                            <br/>
                                            {props.items[id].params.rekParosNorma.energineVerte.kj}
                                            <br/>
                                        </span>
                                    </Row>
                                    <Row className={styles.percent} >
                                        {props.items[id].params.rekParosNorma.energineVerte.percent}
                                    </Row>
                                </Col>
                            </OverlayTrigger>

                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                                <Col className={styles.descRekParosNormaColContainer}  >
    
                                        <Row className={styles.name} >Riebalai</Row>
                                        <Row>
                                            <span className={styles.value}>
                                                {props.items[id].params.rekParosNorma.riebalai.value}
                                            </span>
                                        </Row>
                                        <Row className={styles.percent} >
                                            {props.items[id].params.rekParosNorma.riebalai.percent}
                                        </Row>

                                </Col>
                            </OverlayTrigger>
            
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                            <Col className={styles.descRekParosNormaColContainer}  >

                                    <Row className={styles.name} >Sosciosios riebalu rugstys</Row>
                                    <Row>
                                        <span className={styles.value}>
                                            {props.items[id].params.rekParosNorma.socRiebRug.value}
                                        </span>
                                    </Row>
                                    <Row className={styles.percent} >
                                        {props.items[id].params.rekParosNorma.socRiebRug.percent}
                                    </Row>

                            </Col>
                            </OverlayTrigger>
            
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                            <Col className={styles.descRekParosNormaColContainer}  >

                                    <Row className={styles.name} >Angliavandeniai</Row>
                                    <Row>
                                        <span className={styles.value}>
                                            {props.items[id].params.rekParosNorma.angliavandeniai.value}
                                        </span>
                                    </Row>
                                    <Row className={styles.percent} >
                                        {props.items[id].params.rekParosNorma.angliavandeniai.percent}
                                    </Row>

                            </Col>
                            </OverlayTrigger>
            
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                            <Col className={styles.descRekParosNormaColContainer}  >

                                    <Row className={styles.name} >Cukrus</Row>
                                    <Row>
                                        <span className={styles.value}>
                                            {props.items[id].params.rekParosNorma.cukrus.value}
                                        </span>
                                    </Row>
                                    <Row className={styles.percent} >
                                        {props.items[id].params.rekParosNorma.cukrus.percent}
                                    </Row>

                            </Col>
                            </OverlayTrigger>
            
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                            <Col className={styles.descRekParosNormaColContainer}  >

                                    <Row className={styles.name} >Baltymai</Row>
                                    <Row>
                                        <span className={styles.value}>
                                            {props.items[id].params.rekParosNorma.baltymai.value}
                                        </span>
                                    </Row>
                                    <Row className={styles.percent} >
                                        {props.items[id].params.rekParosNorma.baltymai.percent}
                                    </Row>

                            </Col>
                            </OverlayTrigger>
        
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 50, hide: 50 }}
                            overlay={renderTooltip}
                            >
                            <Col className={styles.descRekParosNormaColContainer}  >

                                    <Row className={styles.name} >Druska</Row>
                                    <Row>
                                        <span className={styles.value} >
                                            {props.items[id].params.rekParosNorma.druska.value}
                                        </span>
                                    </Row>
                                    <Row className={styles.percent} >
                                        {props.items[id].params.rekParosNorma.druska.percent}
                                    </Row>

                            </Col>
                            </OverlayTrigger>
                        </Row>
                        </Col>
                        </Row>
                    </Row>) : <div></div> }
                    {/* STATS */}



                    <Row className={styles.descItemRowContainer} >
                        <Col>
                            <Row className={styles.descItemRowTitleOpacity} >
                                <label>PREKIŲ INFORMACIJA IR APRAŠYMAS</label>
                            </Row>
                            <Row className={styles.descItemRowContentOpacity} >
                                <label>Realios prekės išvaizda gali šiek tiek skirtis nuo esančios nuotraukoje. Prekės, kurias gausite, gali būti kitokioje pakuotėje bei kitokios išvaizdos ar formos. Informacija produkto aprašyme, kuri pateikiama elektroninėje parduotuvėje, yra bendro pobūdžio, todėl nėra tapati informacijai, nurodomai ant produkto pakuotės. Ant produkto pakuotės nurodoma informacija yra išsamesnė ir gali šiek tiek skirtis nuo informacijos, nurodomos elektroninėje parduotuvėje pateiktų prekių aprašymuose. Visada rekomenduojame perskaityti ir vadovautis informacija, esančia ant prekės pakuotės. Akcinių prekių kiekis yra ribotas.</label>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default Item;