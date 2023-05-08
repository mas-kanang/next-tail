import DaftarPengajuan from "@/components/pengajuan/DaftarPengajuan";
import EditPengajuan from "@/components/pengajuan/EditPengajuan";
import TambahPengajuan from "@/components/pengajuan/TambahPengajuan";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout";

export default function Pengajuan() {
  const USER_API_BASE_URL = "http://localhost:8080/konfirmasi";
  const [loading, setLoading] = useState(true);
  const [pengajuans, setPengajuans] = useState([]);
  const [aju, setAju] = useState({});
  const [responseData, setResponseData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
        });
        const res = await response.json();
        // console.log(res);
        setPengajuans(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
    console.clear();
  }, [responseData]);

  const saveData = async (data) => {
    const response = await fetch(USER_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    setResponseData(response);
  };

  const updateData = async (data) => {
    const response = await fetch(USER_API_BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    setResponseData(response);
  };

  const deleteData = async (id) => {
    const response = await fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    });

    console.log(response);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    setResponseData(response);
  };

  const editData = async (id) => {
    const response = await fetch(USER_API_BASE_URL + "/" + id, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const res = await response.json();
    // console.log(res);
    setAju(res);
    setIsOpen(true);
  };

  return (
    <Layout pageTitle="Login Page">
      <TambahPengajuan saveData={saveData} />
      <DaftarPengajuan
        pengajuans={pengajuans}
        deleteData={deleteData}
        editData={editData}
      />
      <EditPengajuan
        aju={aju}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        updateData={updateData}
      />
    </Layout>
  );
}
