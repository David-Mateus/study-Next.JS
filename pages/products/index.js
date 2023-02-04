import Link from "next/link";
export default function Products(){
    return (
      <div>
        <h1>Pagina de produto</h1>
        <ul>
          <li><Link href="products/pants/redpant">Calça vermelha</Link></li>
          <li><Link href="products/pants/bluepant">Calça Azul</Link></li>
          <li><Link href="products/shirt">Camisa</Link></li>
          <li><Link href="/">Home</Link></li>
        </ul>
      </div>
    );
}