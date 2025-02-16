"use client";

import { TournamentDataProps } from "@/types";
import { useEffect, useState } from "react";
import useTournamentDataFilter from "@/hooks/useTournamentFilter";
import SearchBar from "@/components/SearchBar";

export default function TournamentTable({
  tournamentData,
}: TournamentDataProps) {
  const [tournamentFilter, setTournamentFilter] = useState(""); // text from search bar
  const [filteredTournamentData, setFilteredTournamentData] =
    useTournamentDataFilter(tournamentData);

  useEffect(() => {
    setFilteredTournamentData(tournamentFilter);
  }, [tournamentFilter]);

  const stickyHeader =
    "sticky top-0 p-3 bg-teal-600 text-white dark:bg-gray-600";

  return (
    <section className="w-full grid auto-rows-max pb-20 lg:h-[calc(100vh-174px)] lg:col-start-2 lg:col-end-3">
      <SearchBar
        tournamentFilter={tournamentFilter}
        setTournamentFilter={setTournamentFilter}
      />
      <table className="relative table-fixed w-full text-center text-xs">
        <thead>
          <tr>
            <th className={stickyHeader}>Date</th>
            <th className={stickyHeader}>Ville</th>
            <th className={stickyHeader}>Tournois</th>
            <th className={stickyHeader}>Cadence</th>
          </tr>
        </thead>
        <tbody>{filteredTournamentData}</tbody>
      </table>
    </section>
  );
}
