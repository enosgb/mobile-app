import React from "react";
import { Card } from "../components/Card";
import { Cards } from "../components/Cards";
import { FiUser, FiUsers} from "react-icons/fi";
import { GoGraph} from "react-icons/go";
import { BsBoxSeam} from "react-icons/bs";
import { MdOutlineAttachMoney} from "react-icons/md"


export const Home: React.FC = () => {
    return (
        <div className="content">
            <h2 className="content-title">Dashboard</h2>
            <div className="content-body">
                <Cards>
                    <Card title="Resumo financeiro do mês" isFullSize={true} />
                    <Card title="Mais vendidos" />
                    <Card title="Mais rentáveis" />
                    <Card title="Últimas atualizações" />
                    <Card title="Estoque baixo" />
                </Cards>
                <footer className ="tabbar">
                    <button className="tabbar__button">
                        <GoGraph/>
                    </button>
                    <button className="tabbar__button">
                        <BsBoxSeam/>
                    </button>
                    <button className="tabbar__button">
                        <FiUser/>
                    </button>
                    <button className="tabbar__button">
                        <MdOutlineAttachMoney/>
                    </button>                    
                </footer>
                <footer className ="tabbar">
                    <p className="tabbar__title">Inicio</p>
                    <p className="tabbar__title">Produtos</p>
                    <p className="tabbar__title">Clientes</p>
                    <p className="tabbar__title">Finanças</p>
                </footer>                    
            </div>
        </div>
    );
}