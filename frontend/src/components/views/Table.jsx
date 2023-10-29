"use client";

import { FaRegEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {
  Card,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

const TABS = [
  {
    label: "Todos",
    value: "todos",
  },
  {
    label: "Pagados",
    value: "pagados",
  },
  {
    label: "Pendientes",
    value: "pendientes",
  },
];

const TABLE_HEAD = [
  "Cuenta",
  "Categoría",
  "Descripción",
  "Fecha",
  "Total",
  "Repetir",
  "Estado",
  "",
];

const TABLE_ROWS = [
  {
    id: 1,
    cuenta: "Efectivo",
    categoria: "Alquiler",
    descripcion: "Departamento",
    date: "23/04/18",
    total: 153000,
    repetir: "fijo",
    saldado: true,
  },
  {
    id: 2,
    cuenta: "Efectivo",
    categoria: "Alimentos",
    descripcion: "Super mercado",
    date: "23/04/18",
    total: 3000,
    repetir: "unico",
    saldado: false,
  },
  {
    id: 3,
    cuenta: "VISA",
    categoria: "Varios",
    descripcion: "Campera en ADIDAS",
    date: "19/09/17",
    total: 53000,
    repetir: "3 veces",
    saldado: false,
  },
  {
    id: 4,
    cuenta: "Efectivo",
    categoria: "Alquiler",
    descripcion: "Departamento",
    date: "24/12/08",
    total: 153000,
    repetir: "fijo",
    saldado: true,
  },
  {
    id: 5,
    cuenta: "VISA",
    categoria: "Suscripciones",
    descripcion: "Pago de Netflix",
    date: "04/10/21",
    total: 25000,
    repetir: "fijo",
    saldado: false,
  },
  {
    id: 6,
    cuenta: "VISA",
    categoria: "Suscripciones",
    descripcion: "Pago de Spotify",
    date: "04/10/21",
    total: 5,
    repetir: "fijo",
    saldado: true,
  },
  {
    id: 7,
    cuenta: "Efectivo",
    categoria: "Alimentos",
    descripcion: "Compra de almuerzo",
    date: "04/10/21",
    total: 250,
    repetir: "único",
    saldado: true,
  },
];

const itemsPage = 5;

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const titleSection = useAppSelector(
    (state) => state.activeSection.activeSection
  );
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredTableData.length / itemsPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCategoryFilter = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const categories = [...new Set(TABLE_ROWS.map((row) => row.categoria))];
  //console.log(categories);

  // Filtrar los datos en función de la búsqueda, el filtro y la categoría seleccionada
  const filteredTableData = TABLE_ROWS.filter((row) => {
    const values = Object.values(row).map((value) =>
      value.toString().toLowerCase()
    );
    if (filter === "pagados") {
      return (
        row.saldado &&
        values.some((value) => value.includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "Todas" || row.categoria === selectedCategory)
      );
    } else if (filter === "pendientes") {
      return (
        !row.saldado &&
        values.some((value) => value.includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "Todas" || row.categoria === selectedCategory)
      );
    } else {
      return (
        values.some((value) => value.includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "Todas" || row.categoria === selectedCategory)
      );
    }
  });

  // Calcular el rango de elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  const visibleItems = filteredTableData.slice(startIndex, endIndex);

  return (
    <Card className="h-full w-full">
      <div className="rounded-none mt-10">
        <div className="mb-8 flex items-center justify-around gap-8">
          <div className="flex  gap-5">
            <Typography variant="h5" color="blue-gray">
              {titleSection === "bills" ? "Gastos" : "Ingresos"}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Último registro: <span className="text-blue-500">fecha</span>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-4 md:flex-row">
          <Tabs value={filter} className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => handleFilterChange(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Buscar"
              // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="fflex w-72 flex-col gap-6">
            <Select
              label="Categorías"
              size="md"
              value={selectedCategory}
              onChange={(e) => handleCategoryFilter(e)}
            >
              <Option value="Todas">Todas</Option>
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover-bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {/* {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )} */}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleItems.map(
              (
                {
                  id,
                  cuenta,
                  categoria,
                  descripcion,
                  date,
                  total,
                  repetir,
                  saldado,
                },
                index
              ) => {
                const isLast = index === visibleItems.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {cuenta}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {categoria}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {descripcion}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {total}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {repetir}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={saldado ? "Pagado" : "Pendiente"}
                          color={saldado ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Editar">
                        <IconButton variant="text">
                          <FaRegEdit className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Eliminar">
                        <IconButton variant="text">
                          <AiOutlineClose className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Página {currentPage} de{" "}
          {Math.ceil(filteredTableData.length / itemsPage)}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={handlePreviousPage}>
            Anterior
          </Button>
          <Button variant="outlined" size="sm" onClick={handleNextPage}>
            Siguiente
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Table;
