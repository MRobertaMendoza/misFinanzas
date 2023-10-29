import Image from "next/image";
import graphics from "@/assets/landing/graphics.png";
export default function LandingTwo() {
  /* 

position: absolute;
width: 1280px;
height: 737px;
left: 0px;
top: 837px;

background: linear-gradient(180deg, #44444C 0%, rgba(68, 68, 76, 0) 42.71%);
 */
  return (
    <section
      id=""
      className="min-h-screen p-10 w-full grid grid-cols-1 items-center md:grid-cols-2 md:content-evenly md:justify-items-center"
    >
      <div className="w-full flex justify-center items-center">
        <Image
          className="4/5 md:w-[500px]"
          alt="Graphics picture"
          src={graphics}
        />
      </div>
      <div className="flex flex-col gap-5 max-w-md">
        <div className="details-wrapper">
          <details className="">
            <summary className="font-semibold text-xl">
              Visualiza tu ECONOMIA
            </summary>
            <p className="p-4">
              Observa tus ingresos y gastos de manera clara y visual a través de
              gráficos interactivos y animaciones cautivadoras. Toma decisiones
              informadas y controla tus finanzas con facilidad.
            </p>
          </details>
          <hr />
        </div>
        <div className="details-wrapper">
          <details>
            <summary className="font-semibold text-xl">
              Ingresa tus MOVIMIENTOS
            </summary>
            <p className="p-4">
              Registra fácilmente tus ingresos y gastos para mantener un control
              preciso de tus finanzas. Nuestra interfaz intuitiva te permite
              ingresar y categorizar tus transacciones de forma rápida y
              sencilla.
            </p>
          </details>
          <hr />
        </div>
        <div className="details-wrapper">
          <details>
            <summary className="font-semibold text-xl">
              Administra tus CUENTAS
            </summary>
            <p className="p-4">
              Con nuestra función de administración de cuentas, puedes agregar,
              organizar y monitorear todas tus cuentas financieras en un solo
              lugar.
            </p>
          </details>
          <hr />
        </div>
        <div className="details-wrapper">
          <details>
            <summary className="font-semibold text-xl">
              Personaliza tus ALERTAS de cobro
            </summary>
            <p className="p-4">
              Configura notificaciones personalizadas para recibir recordatorios
              de pagos pendientes, fechas límite de facturas y vencimientos de
              préstamos.
            </p>
          </details>
          <hr />
        </div>

        <button className="bg-mYellow text-mBlack rounded-full p-4 w-full md:w-96 font-semibold text-2xl">
          Prueba una Demo
        </button>
      </div>
    </section>
  );
}

/* 

*/

/* 
                <div class="wrapper overflow-hidden mx-auto max-w-md rounded">

                    <div class="question-wrap mx-8 mt-2">
                        <details class="question py-4 border-b border-grey-lighter">

                            <summary class="flex items-center font-bold">My childhoood
                                <button class="ml-auto">
                                    <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                </button>
                            </summary>

                            <div class="mt-4 leading-normal text-md ">I lived near lake Eerie and I really miss sunsets over the water. Fuga perspiciatis quidem sunt animi.  We can all grab at the chance to be handsome farmers. YEAH you can have 21 sons that'll be blood when they marry my daughters. And the pain that we left at the station will stay in a jar behind us. We can pickle the pain into blue ribbon winners at county contests....
                                Gosh. I loved her to bits</div>
                        </details>

                        <details class="question py-4 border-b border-grey-lighter">

                            <summary class="flex items-center">Ex nihilo nihil
                                <button class="ml-auto">
                                    <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                </button>
                            </summary>

                            <div class="mt-4 leading-normal text-md">
                                <p>ništavilo se vraća sebi kao sve u svemu</p>
                            </div>
                        </details>

                        <details class="question py-4 border-b border-grey-lighter">

                            <summary class="flex items-center">Estuarij iznad rijeke [r]iverice
                                <button class="ml-auto">
                                    <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                </button>
                            </summary>

                            <div class="mt-4 leading-normal text-md ">Zašto pitaš mene? Pitaj šulasice. Question remains - should I invest in a bycicle? !
                                Estuarij iznad rijeke Iverice [riverice].</div>
                        </details>


                        <details class="question py-4 border-b border-grey-lighter">

                            <summary class="flex items-center font-bold">Poput oceana tekuće magije
                                <button class="ml-auto">
                                    <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                </button>
                            </summary>

                            <div class="mt-4 leading-normal text-md ">
                                Čitav naš svijet je poput oceana tekuće materije. Svi njegovi rubovi i rubovi objekata koje percipiramo kao objekte s čvrstim stjenkama samo su iluzija koju nam nameću naša ograničena osjetila. Odnosno, naša osjetila ili kakav god drugi instrumentarij izmislili kako bismo proširili područje vlastita opažanja, uvijek će ostati nedovoljno savršena i ograničena za druge dimenzije svijesti, dimenzije koje nadilaze materijalni svijet, prostor i vrijeme. No...zađemo li malo dublje u smisao i bit ljudskog postojanja shvatiti ćemo da postoje i drugi načini komunikacije i opažanja kudikamo suptilniji od onih kojeg čovjek može dosegnuti s svojih pet čula, a to su oni putem univerzalne svijesti. Naime, mi kao ljudska bića nismo izolirani od ostatka svijeta i svemira. Uronjen u nevidljivu vibraciju polja ovog svemira čovjek je smisleno povezan s svime što ga okružuje i s svime što postoji i što je ikada postojalo, a što dolazi iz istog praiskonskog izvora...pa na jednoj dubljoj, duhovnijoj i svjesnijoj razini čovjek ipak može osjetiti tu vibraciju.	Čitav naš svijet je poput oceana tekuće materije. Svi njegovi rubovi i rubovi objekata koje percipiramo kao objekte s čvrstim stjenkama samo su iluzija koju nam nameću naša ograničena osjetila. Odnosno, naša osjetila ili kakav god drugi instrumentarij izmislili kako bismo proširili područje vlastita opažanja, uvijek će ostati nedovoljno savršena i ograničena za druge dimenzije svijesti, dimenzije koje nadilaze materijalni svijet, prostor i vrijeme. No...zađemo li malo dublje u smisao i bit ljudskog postojanja shvatiti ćemo da postoje i drugi načini komunikacije i opažanja kudikamo suptilniji od onih kojeg čovjek može dosegnuti s svojih pet čula, a to su oni putem univerzalne svijesti. Naime, mi kao ljudska bića nismo izolirani od ostatka svijeta i svemira. Uronjen u nevidljivu vibraciju polja ovog svemira čovjek je smisleno povezan s svime što ga okružuje i s svime što postoji i što je ikada postojalo, a što dolazi iz istog praiskonskog izvora...pa na jednoj dubljoj, duhovnijoj i svjesnijoj razini čovjek ipak može osjetiti tu vibraciju.

                            </div>
                        </details>

                    </div>
                </div>
*/
