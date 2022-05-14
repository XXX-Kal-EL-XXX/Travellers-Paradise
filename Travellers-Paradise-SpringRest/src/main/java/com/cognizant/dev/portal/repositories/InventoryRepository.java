package com.cognizant.dev.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.dev.portal.models.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}
